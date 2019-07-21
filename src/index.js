import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RepoListPage from './pages/RepoListPage'
import SearchListPage from './pages/SearchListPage'
import EditPage from './pages/EditPage'
import DetailPage from './pages/DetailPage'
import CallbackPage from './pages/CallbackPage'

import rootReducer from './reducers'
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/repolist" component={RepoListPage} />
        <Route path="/searchlist" component={SearchListPage} />
        <Route path="/edit/:id?" component={EditPage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/callback" component={CallbackPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
