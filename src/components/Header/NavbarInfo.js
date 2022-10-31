import React, { Fragment } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { NavLink } from 'react-router-dom';


export default function NavbarInfo() {
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <NavLink to=''>
                            Giới thiệu nhà xuất bản
                        </NavLink>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink to=''>
                            Tác giả - Tác phẩm
                        </NavLink>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <NavLink to=''>
                            Công tác xã hội
                        </NavLink>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <NavLink to=''>
                            Khen thưởng của nhà nước
                        </NavLink>
                    ),
                },
                {
                    key: '5',
                    label: (
                        <NavLink to=''>
                            Hợp tác quốc tế
                        </NavLink>
                    ),
                },
                {
                    key: '6',
                    label: (
                        <NavLink to=''>
                            Hệ thống nhà sách
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
                        GIỚI THIỆU
                        <div style={{ marginTop: '-9px' }}>
                            <DownOutlined className='text-xs' />
                        </div>
                    </Space>
                </NavLink>
            </Dropdown>
        </Fragment>
    )
}
