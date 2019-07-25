import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import LoginBtn from './index'

storiesOf('Login', module).add('login', () => <LoginBtn></LoginBtn>)
