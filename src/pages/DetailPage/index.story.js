import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import DetailPage from './index'

storiesOf('文章预览页面', module).add('loading', () => <DetailPage></DetailPage>)
