import React, { Component } from 'react'
import { Button } from 'antd'
import { ClipLoader } from 'react-spinners'

import RepoList from '../../components/RepoList'

export default class RepoListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      repos: [],
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>repolist</h1>
        <RepoList repos={this.state.repos}></RepoList>
        <ClipLoader loading={this.state.loading}></ClipLoader>
      </div>
    )
  }
}
