import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import SearchListPage from './index'

storiesOf('搜索列表页面', module).add('loading', () => <SearchListPage></SearchListPage>)
