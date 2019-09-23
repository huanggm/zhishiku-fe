import React, { Component } from 'react'

import { Layout, Button, Menu, Dropdown, Icon, Input } from 'antd'

const { Header } = Layout

const { Search } = Input

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

class TopHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Header style={{ background: '#24292e', color: '#fff', display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 300 }}
        />
        <div style={{width:'100%', height: 20, flex: '1 1 100%'}}></div>
        <Dropdown overlay={menu} trigger={['click']}>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
            width="50"
          />
        </Dropdown>
      </Header>
    )
  }
}

export default TopHeader
