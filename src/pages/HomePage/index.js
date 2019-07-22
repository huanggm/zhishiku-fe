import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, message } from 'antd'
import { ClipLoader } from 'react-spinners'

import { fetchUser } from '../../actions/user'
import { fetchArticles } from '../../actions/article'
import { deleteArticle } from '../../actions/article'

import ArticleList from '../../components/ArticleList'

class HomePage extends Component {
  constructor(props) {
    super(props)
    console.log('constructor HomePage')
  }

  componentDidMount() {
    if (!this.props.user.id) {
      this.props.dispatch(fetchUser())
    }
  }
  
  onFetchArticles = () => {
    const query = { page: this.props.page }
    console.log('query.page', query)
    this.props.dispatch(fetchArticles(query))
  }

  onDeleteArticle = article => () => {
    this.props.dispatch(deleteArticle(article))
  }

  onEditArticle = article => () => {
    this.props.history.push(`/edit/${article.owner}/${article.repo}/${article.path}`)
  }

  render() {
    const {
      user,
      userLoading,
      userError,
      articles,
      hasMore,
      articlesLoading,
      articlesError,
    } = this.props

    if(userError) {
      return message.error(userError.message)
    }
    
    if(articlesError) {
      return message.error(articlesError.message)
    }

    return (
      <ArticleList
        articles={articles}
        hasMore={hasMore}
        loading={articlesLoading}
        onFetchArticles={this.onFetchArticles}
        onDeleteArticle={this.onDeleteArticle}
        onEditArticle={this.onEditArticle}
      ></ArticleList>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  userLoading: state.user.loading,
  userError: state.user.error,
  articles: state.articles.articles,
  hasMore: state.articles.hasMore,
  page: state.articles.page,
  articlesLoading: state.articles.loading,
  articlesError: state.articles.error,
})

export default connect(mapStateToProps)(HomePage)
