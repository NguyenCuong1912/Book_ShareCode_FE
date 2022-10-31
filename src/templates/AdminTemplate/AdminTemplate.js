import React, { Fragment, useState, useEffect } from 'react'
import {
    FileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, message } from 'antd';
import { Route } from 'react-router';
import { Redirect, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { history } from '../../App';

const { Header, Content, Footer, Sider } = Layout;

export default function AdminTemplate(props) {
    const { Component, ...restRoute } = props;
    const [collapsed, setCollapsed] = useState(false);

    // const { userLogin } = useSelector(state => state.QuanLyUserReducer);
    // console.log({ userLogin })
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    // const operations = <Fragment>
    //     {!_.isEmpty(userLogin) ? <div className='flex'>
    //         <NavLink to='/profile' className='flex'>
    //             <img className='w-14 h-14 rounded-full' src='https://c4.wallpaperflare.com/wallpaper/240/34/575/8k-vegetto-4k-super-saiyan-blue-wallpaper-preview.jpg' alt={userLogin.username} />
    //             <span className='flex items-center text-lg font-bold mx-2 cursor-pointer text-yellow-500'>{userLogin.username}</span>
    //         </NavLink>
    //         <button onClick={() => {
    //             // sessionStorage.removeItem(USER_LOGIN);
    //             // sessionStorage.removeItem(TOKEN);
    //             history.push('/home');
    //             window.location.reload();
    //         }} className="self-center border-l-2 border-green-900 px-8 py-3 text-yellow-500 text-lg font-bold hover:text-green-900">Đăng xuất</button>
    //     </div> : ''}
    // </Fragment>
    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ background: 'linear-gradient(180deg, white, #002140 80%)' }}>
                    <div className="logo mt-4 flex" style={{ backgroundColor: 'transparent' }}>
                        <img src='https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=48' alt='Kim đồng' className='w-14 h-20 cursor-pointer ml-4' />
                        <span className='text-red-500 flex items-center font-bold text-lg mx-4'>KIM ĐỒNG</span>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ backgroundColor: 'transparent' }}>
                        <Menu.Item key='1' icon={<UserOutlined />}>
                            <NavLink to='/admin/account' >Users</NavLink>
                        </Menu.Item>
                        <Menu.Item key='2' icon={<FileOutlined />}>
                            <NavLink to='/admin/account'>Films</NavLink>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, background: 'linear-gradient(45deg, #002140 5%, transparent)' }}>
                        {/* <div className='flex justify-end my-4'>{operations}</div> */}
                    </Header>
                    <Content style={{ margin: '0 16px', }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>

                            <Component {...propsRoute} />

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}
