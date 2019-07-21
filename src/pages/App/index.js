import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import RepoListPage from '../RepoListPage'
import EditPage from '../EditPage'
import DetailPage from '../DetailPage'
import CallbackPage from '../CallbackPage'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/repolist" component={RepoListPage} />
      <Route path="/edit/:id?" component={EditPage} />
      <Route path="/detail/:id" component={DetailPage} />
      <Route path="/callback" component={CallbackPage} />
      <Route component={HomePage} />
    </Switch>
  </Router>
)
