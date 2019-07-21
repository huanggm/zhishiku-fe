import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, message } from 'antd'
import { ClipLoader } from 'react-spinners'

import {fetchUser} from '../../actions/user'

import RepoList from '../../components/RepoList'

class HomePage extends Component {
  componentDidMount() {
    if(!this.props.user.id) {
      this.props.dispatch(fetchUser())
    }
  }

  render() {
    const {error, loading, user} = this.props

    if(error) {
      return <div>Error! {error.message}</div>
    }

    if(loading) {
      return <ClipLoader loading={loading}></ClipLoader>
    }

    return (
      <div>
        <h1>home</h1>
        <div>{user.name}</div>
        <div>{user.login}</div>
        <div>{user.avatar_url}</div>
        <Link to="/repolist">去项目列表页面</Link>
        <img src={user.avatar_url} alt="logo"/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  loading: state.user.loading,
  error: state.user.error,
})

export default connect(mapStateToProps)(HomePage)