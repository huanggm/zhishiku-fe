import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, message } from 'antd'
import { ClipLoader } from 'react-spinners'

import { fetchUser } from '../../actions/user'
import { fetchArticles } from '../../actions/article'

import ArticleList from '../../components/ArticleList'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }

  componentDidMount() {
    if (!this.props.user.id) {
      this.props.dispatch(fetchUser())
    }
  }
  
  onFetchArticles = () => {
    const page = this.state.page
    const query = {
      page: page
    }
    this.props.dispatch(fetchArticles(query))
    this.setState({
      page: page + 1
    })
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

    if (userError || articlesError) {
      return (
        <div>
          <h2>Error! </h2>
          <p>{userError && userError.message}</p>
          <p>{articlesError && articlesError.message}</p>
        </div>
      )
    }

    if (userLoading || articlesLoading) {
      return <ClipLoader></ClipLoader>
    }

    return (
      <ArticleList
        articles={articles}
        hasMore={hasMore}
        loading={articlesLoading}
        onFetchArticles={this.onFetchArticles}
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
  articlesLoading: state.articles.loading,
  articlesError: state.articles.error,
})

export default connect(mapStateToProps)(HomePage)
