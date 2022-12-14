import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router';
import Home from './pages/UI/Home/Home'
import Register from './pages/Signout/Register'
import Login from './pages/Signin/Login';
import QuanLyUsers from './pages/Admin/Users/QuanLyUsers';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Detail from './pages/UI/Detail/Detail';
import Cart from './pages/UI/Cart/Cart';
export const history = createBrowserHistory();
export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail" exact Component={Detail} />
        <HomeTemplate path="/cart" exact Component={Cart} />


        <UserTemplate path="/admin/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />



        <AdminTemplate path="/admin/account" exact Component={QuanLyUsers} />
      </Switch>
    </Router>
  )
}
