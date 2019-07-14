import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import HomePage from './index'

storiesOf('首页面', module).add('loading', () => <HomePage></HomePage>)
