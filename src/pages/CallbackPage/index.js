import React, { Component } from 'react'
import { message } from 'antd'
import * as api from '../../api'
import Loader from '../../components/Loader'

export default class CallbackPage extends Component {
  componentDidMount() {
    const history = this.props.history
    const search = this.props.location.search
    let failText = ''
    if (search) {
      const match = search.match(/code=([^&]+)/)
      if (match && match[1]) {
        const code = match[1]
        return api
          .loginWithCode(code)
          .then(res => {
            history.replace('/')
          })
          .catch(e => {
            failText = '登录过程中发生错误，3秒后自动跳转回首页'
            message.error(failText, 3, () => {
              history.replace('/')
            })
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
    return <Loader />
  }
}
