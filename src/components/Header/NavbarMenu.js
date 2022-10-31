import React, { Fragment } from 'react'
import { Dropdown, Menu, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import {
    AiOutlineMenu,
    AiFillRead
} from 'react-icons/ai';
export default function NavbarMenu() {
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <NavLink to=''>
                            <span className='font-bold text-red-500 text-base'>Tất cả sản phẩm</span>
                        </NavLink>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink to=''>
                            Lịch sử truyền thống
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />
                },
                {
                    key: '3',
                    label: (
                        <NavLink to=''>
                            Sách công cụ Đoàn đội
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />

                },
                {
                    key: '4',
                    label: (
                        <NavLink to=''>
                            Kiến thức - Khoa học
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />

                },
                {
                    key: '5',
                    label: (
                        <NavLink to=''>
                            Văn học Việt Nam
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />

                },
                {
                    key: '6',
                    label: (
                        <NavLink to=''>
                            Văn học nước ngoài
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />

                },
                {
                    key: '7',
                    label: (
                        <NavLink to=''>
                            Truyện tranh
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />

                },
                {
                    key: '8',
                    label: (
                        <NavLink to=''>
                            Manga - Comic
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />

                },
                {
                    key: '9',
                    label: (
                        <NavLink to=''>
                            WingsBooks
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />

                },
                {
                    key: '10',
                    label: (
                        <NavLink to=''>
                            Giải mã bản thân
                        </NavLink>
                    ),
                    icon: <AiFillRead style={{ fontSize: '18px' }} />

                },
                {
                    key: '11',
                    label: (
                        <NavLink to=''>
                            Sách theo độ tuổi
                        </NavLink>
                    ),
                    children: [
                        {
                            key: '11-1',
                            label: 'Nhà trẻ - Mẫu giáo( 0-6 tuổi)',
                        },
                        {
                            key: '11-2',
                            label: 'Nhi đồng (6-11 tuổi)',
                        },
                        {
                            key: '11-3',
                            label: 'Thiếu niên (11-15 tuổi)',
                        },
                        {
                            key: '11-4',
                            label: 'Cha mẹ đọc cùng con',
                        },
                        {
                            key: '11-5',
                            label: 'Tuổi mới lớn (15-18 tuổi)',
                        },
                        {
                            key: '11-6',
                            label: 'Thanh niên (Trên 18 tuổi)',
                        },
                    ],
                },
            ]}
        />
    );
    return (
        <Fragment>
            <Dropdown overlay={menu}>
                <NavLink to='' onClick={(e) => e.preventDefault()} className='text-white hover:text-white'>
                    <Space>
                        <AiOutlineMenu className='text-2xl mx-2' />
                        DANH MỤC SẢN PHẨM
                    </Space>
                </NavLink>
            </Dropdown>
        </Fragment>
    )
}

