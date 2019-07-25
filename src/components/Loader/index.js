import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export default () => (
  <Center>
    <Spin />
  </Center>
)
