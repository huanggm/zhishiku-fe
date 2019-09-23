import {combineReducers} from 'redux'

import user from './user'
import articles from './article'
import repos from './repo'
import query from './query'

export default combineReducers({
  user,
  articles,
  repos,
  query,
})