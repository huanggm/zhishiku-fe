import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, message, notification } from 'antd'
import { ClipLoader } from 'react-spinners'

import { fetchUser } from '../../actions/user'
import { fetchArticles } from '../../actions/article'
import { deleteArticle } from '../../actions/article'

import ArticleList from '../../components/ArticleList'
import Editor from '../../components/Editor'
import EditorModal from '../../components/EditorModal'

import * as api from '../../api'

class EditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      articleLoading: false,
      article: {
        owner: '',
        repo: '',
        path: '',
        content_str: '',
        tags: [],
      },
    }
  }

  componentDidMount() {
    if (!this.props.user.id) {
      this.props.dispatch(fetchUser())
    }
    this.fetchArticle()
  }

  fetchArticle = () => {
    const { owner, repo, path } = this.props.match.params
    if (owner && repo && path) {
      this.setState({
        articleLoading: true,
      })
      api.getOriginalArticle({ owner, repo, path }).then(article => {
        article.tags = article.tags || []
        article.oldPath = path
        this.setState({
          articleLoading: false,
          article: article,
        })
      })
    }
  }

  onClickEditorSave = content => {
    const {article} = this.state
    this.setState({ visible: true, article: {...article, content_str: content} })
  }

  onRepoChange = val => {
    const { article } = this.state
    this.setState({ article: { ...article, repo: val } })
  }
  onPathChange = e => {
    const { article } = this.state
    this.setState({ article: { ...article, path: e.target.value } })
  }
  onTagAdd = tag => {
    const { article } = this.state
    let { tags } = article
    if (tags.indexOf(tag) === -1) {
      tags = [...tags, tag]
    }
    this.setState({ article: { ...article, tags } })
  }
  onTagRemoved = tag => {
    const { article } = this.state
    let { tags } = article
    tags = tags.filter(t => t !== tag)
    this.setState({ article: { ...article, tags } })
  }
  onClickEditorModalSave = () => {
    const { article } = this.state
    const { user } = this.props
    article.owner = user.login
    api.saveArticle(article).then(res => {
      notification.success({
        message: '文章已经直接保存到Github中',
        description: '文章从Github同步到后台需要一定的时间，请耐心等待'
      })
      this.props.history.push('/')
    }).catch(e => {
      message.info('文章名称已经存在，请修改')
    })
  }
  onClickEditorModalCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { user, userLoading, userError } = this.props
    const { visible, article, articleLoading } = this.state
    const { repos, login } = user

    if (userError) {
      return message.error(userError.message)
    }

    if (!user.id || userLoading || articleLoading) {
      return <ClipLoader></ClipLoader>
    }

    return (
      <div>
        <Editor
          initText={article.content_str}
          onSave={this.onClickEditorSave}
        ></Editor>
        <EditorModal
          visible={visible}
          repos={repos}
          owner={login}
          article={article}
          onRepoChange={this.onRepoChange}
          onPathChange={this.onPathChange}
          onTagAdd={this.onTagAdd}
          onTagRemoved={this.onTagRemoved}
          onClickSave={this.onClickEditorModalSave}
          onClickCancel={this.onClickEditorModalCancel}
        ></EditorModal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  userLoading: state.user.loading,
  userError: state.user.error,
})

export default connect(mapStateToProps)(EditPage)
