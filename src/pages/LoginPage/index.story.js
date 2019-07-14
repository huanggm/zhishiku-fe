import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import LoginPage from './index'

storiesOf('登录页面', module).add('loading', () => <LoginPage></LoginPage>)
