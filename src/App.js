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
import QuanLyCategory from './pages/Admin/Category/QuanLyCategory';
import CreateCategory from './pages/Admin/Category/CreateCategory';
import EditCategory from './pages/Admin/Category/EditCategory';
import Product from './pages/UI/Product/Product';
import QuanLyBook from './pages/Admin/Books/QuanLyBook';
import CreateBook from './pages/Admin/Books/CreateBook';
export const history = createBrowserHistory();
export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/product" exact Component={Product} />
        <HomeTemplate path="/detail" exact Component={Detail} />
        <HomeTemplate path="/cart" exact Component={Cart} />


        <UserTemplate path="/admin/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />



        <AdminTemplate path="/admin/account" exact Component={QuanLyUsers} />

        <AdminTemplate path="/admin/category" exact Component={QuanLyCategory} />
        <AdminTemplate path="/admin/category/create" exact Component={CreateCategory} />
        <AdminTemplate path="/admin/category/edit/:id" exact Component={EditCategory} />

        <AdminTemplate path="/admin/product" exact Component={QuanLyBook} />
        <AdminTemplate path="/admin/product/create" exact Component={CreateBook} />




      </Switch>
    </Router>
  )
}
