import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, message, notification } from 'antd'

import { fetchUser } from '../../actions/user'
import { fetchArticles } from '../../actions/article'
import { deleteArticle } from '../../actions/article'

import ArticleList from '../../components/ArticleList'
import Editor from '../../components/Editor'
import EditorModal from '../../components/EditorModal'

import * as api from '../../api'

class DetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleLoading: false,
      article: {
        userid: '',
        repo: '',
        path: '',
        content_str: '',
        tags: [],
      },
    }
  }

  componentDidMount() {
    this.fetchArticle()
  }

  fetchArticle = () => {
    const { userid, repo, path } = this.props.match.params
    if (userid && repo && path) {
      this.setState({ articleLoading: true })
      api.getArticle({ userid, repo, path }).then(article => {
        article.tags = article.tags || []
        this.setState({
          articleLoading: false,
          article: article,
        })
      })
    }
  }

  render() {
    const { article, articleLoading } = this.state

    return <div>{article.content_str}</div>
  }
}

export default DetailPage
