import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CallbackPage from './index'

storiesOf('Github回调页面', module).add('loading', () => <CallbackPage></CallbackPage>)
