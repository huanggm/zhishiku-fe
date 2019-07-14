import React, { Component } from 'react'
import { ClipLoader } from 'react-spinners'
import {message} from 'antd'
import * as api from '../../api'

export default class RepoListPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const history = this.props.history
    const search = this.props.location.search
    let failText = ''
    if (search) {
      const match = search.match(/code=([^&]+)/)
      if (match && match[1]) {
        const code = match[1]
        return api.loginWithCode(code)
          .then(res => {
            history.replace('/')
          })
          .catch(e => {
            failText = '登录过程中发生错误，3秒后自动跳转回首页'
          })
      } else {
        failText = '回调code不存在，3秒后自动跳转回首页'
      }
    } else {
      failText = '回调URL错误，3秒后自动跳转回首页'
    }
    message.error(failText, 3, () => {
      history.replace('/')
    })
  }

  render() {
    return (
      <div>
        <h1>正在登录中</h1>
        <ClipLoader loading={true}></ClipLoader>
      </div>
    )
  }
}
