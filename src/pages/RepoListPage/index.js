import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, message } from 'antd'
import { ClipLoader } from 'react-spinners'

import { fetchUser } from '../../actions/user'
import { fetchRepos } from '../../actions/repo'
import { connectRepo } from '../../actions/repo'
import { unconnectRepo } from '../../actions/repo'

import RepoList from '../../components/RepoList'

import {
  CONNECT_NO,
  CONNECT_SUCCEED,
  CONNECT_FAILED,
} from '../../constants'

class RepoListPage extends Component {
  componentDidMount() {
    if (!this.props.user.id) {
      this.props.dispatch(fetchUser())
    }
    if (this.props.repos.length === 0) {
      this.props.dispatch(fetchRepos())
    }
  }

  onClickRepo = repo => () => {
    const status = repo.connectStatus
    if (status === CONNECT_NO) {
      //当前未关联，点击后开始关联
      this.props.dispatch(connectRepo(repo))
    } else if (status === CONNECT_SUCCEED || status === CONNECT_FAILED) {
      //当前已经关联，点击后取消关联
      this.props.dispatch(unconnectRepo(repo))
    }
  }

  render() {
    const {
      user,
      userLoading,
      userError,
      repos,
      reposLoading,
      reposError,
    } = this.props

    if (userError || reposError) {
      return (
        <div>
          <h2>Error! </h2>
          <p>{userError && userError.message}</p>
          <p>{reposError && reposError.message}</p>
        </div>
      )
    }

    if (userLoading || reposLoading) {
      return <ClipLoader></ClipLoader>
    }

    return (
      <div>
        <h1>repolist</h1>
        <div>{user.name}</div>
        <div>{user.login}</div>
        <div>{user.avatar_url}</div>
        <RepoList repos={repos} onClickRepo={this.onClickRepo}></RepoList>
        <Link to="/">去首页</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  userLoading: state.user.loading,
  userError: state.user.error,
  repos: state.repos.repos,
  reposLoading: state.repos.loading,
  reposError: state.repos.error,
})

export default connect(mapStateToProps)(RepoListPage)
