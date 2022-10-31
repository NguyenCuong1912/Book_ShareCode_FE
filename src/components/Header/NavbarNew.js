import React, { Fragment } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { NavLink } from 'react-router-dom';
export default function NavbarNew() {
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <NavLink to=''>
                            Hoạt động
                        </NavLink>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink to=''>
                            Sự kiện
                        </NavLink>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <NavLink to=''>
                            Điểm sách
                        </NavLink>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <NavLink to=''>
                            Lịch phát hành sách định kỳ
                        </NavLink>
                    ),
                },
            ]}
        />
    );
    return (
        <Fragment>
            <Dropdown overlay={menu}>
                <NavLink to='' onClick={(e) => e.preventDefault()} className='text-black font-medium hover:text-red-500'>
                    <Space>
                        TIN TỨC
                        <div style={{ marginTop: '-9px' }}>
                            <DownOutlined className='text-xs' />
                        </div>
                    </Space>
                </NavLink>
            </Dropdown>
        </Fragment>
    )
}
