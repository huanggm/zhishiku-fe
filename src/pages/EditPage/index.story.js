import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import EditPage from './index'

storiesOf('文章编辑页面', module).add('loading', () => <EditPage></EditPage>)
