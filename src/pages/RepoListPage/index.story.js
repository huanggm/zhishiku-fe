import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import RepoListPage from './index'

storiesOf('项目列表页面', module).add('loading', () => <RepoListPage></RepoListPage>)
