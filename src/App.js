import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router';
import Home from './pages/UI/Home/Home'
import Register from './pages/Signout/Register'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
export const history = createBrowserHistory();
export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <UserTemplate path="/register" exact Component={Register} />
      </Switch>
    </Router>
  )
}
