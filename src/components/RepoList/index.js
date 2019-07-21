import React from 'react'
import { Button } from 'antd'
import {
  CONNECTING,
  CONNECT_ABORTING,
  STATUS_TEXT,
  BTN_TEXT,
} from '../../constants'

const Repo = ({ repo, onClickRepo }) => {
  const status = repo.connectStatus
  const loading = status === CONNECTING || status === CONNECT_ABORTING
  const statusText = STATUS_TEXT[status]
  const btnText = BTN_TEXT[status]
  return (
    <div>
      <span>{repo.name}</span>
      <span>{statusText}</span>
      <Button type="primary" loading={loading} onClick={onClickRepo(repo)}>
        {btnText}
      </Button>
    </div>
  )
}

export default ({ repos, onClickRepo }) =>
  repos.map(repo => (
    <Repo key={repo.id} repo={repo} onClickRepo={onClickRepo}></Repo>
  ))
