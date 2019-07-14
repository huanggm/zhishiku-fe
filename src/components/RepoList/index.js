import React from 'react'
import { Button } from 'antd'

const activeRepo = repo => () => {
  // api.repo.activeRepo().then(res => {

  // })
}

const Repo = ({repo}) => (
  <div><span>{repo.name}</span><Button type="primary" onClick={this.activeRepo(repo)}>激活</Button></div>
)

export default ({repos}) => (
  repos.map(repo => <Repo repo={repo}></Repo>)
)
