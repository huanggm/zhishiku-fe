import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, message, Layout } from 'antd'

import { fetchUser } from '../../actions/user'
import { fetchArticles } from '../../actions/article'
import { deleteArticle } from '../../actions/article'

import ArticleList from '../../components/ArticleList'
import TopHeader from '../../components/TopHeader'

const { Header, Content, Footer, Sider } = Layout

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
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.userError) {
      this.props.history.push('/login')
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

  onEditArticle = ({ userid, repo, path }) => () => {
    this.props.history.push(`/edit/${userid}/${repo}/${path}`)
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

    return (
      <Layout>
        <TopHeader />
        <Layout>
          <Sider
            width={320}
            style={{
              overflow: 'hidden',
              background: '#fff',
              borderBottom: '1px solid #e1e4e8',
              borderRight: '1px solid #e1e4e8',
            }}
          >
            <ArticleList
              articles={articles}
              hasMore={hasMore}
              loading={articlesLoading}
              onFetchArticles={this.onFetchArticles}
              onDeleteArticle={this.onDeleteArticle}
              onEditArticle={this.onEditArticle}
            ></ArticleList>
          </Sider>
          <Layout style={{borderBottom: '1px solid #e1e4e8'}}>
            <Content
              style={{
                background: '#f6f8fa',
                padding: 24,
                margin: 0,
                minHeight: '100vh',
              }}
            >
              <div>hello content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  query: state.query,

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
