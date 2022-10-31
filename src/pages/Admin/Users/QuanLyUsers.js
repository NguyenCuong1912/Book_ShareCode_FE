import React, { Fragment, useEffect } from 'react'
import { Table, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { GetListUserAction, DeleteUser } from './../../../redux/Actions/QuanLyUserAction';


const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function QuanLyUsers() {
    const dispatch = useDispatch();
    const { userLogin } = useSelector(state => state.QuanLyUserReducer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        dispatch(GetListUserAction());
    }, [])



    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Tài khoản',
            dataIndex: 'username',
        },
        {
            title: 'Loại người dùng',
            dataIndex: 'typeAccount',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isActive',
            render: (text, user) => {
                return <Fragment>
                    {user.isActive === true ? <span className='text-green-500'>Active</span> : <span className='text-red-500'>inActive</span>}
                </Fragment>
            }
        },
        {
            title: '',
            dataIndex: 'id',
            render: (text, user) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        // history.push(`/admin/films/edit/${record.maPhim}`)
                    }}>
                        <EditOutlined style={{ fontSize: 25 }} />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa' onClick={() => {
                        dispatch(DeleteUser(user.id))

                    }}>
                        <DeleteOutlined style={{ fontSize: 25 }} />
                    </button>
                </div>
            },
        },
    ];

    return (
        <div className='container mt-4'>
            <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý Users</h2>
            <div className='my-10 flex justify-between'>
                <button type='button' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-900' onClick={() => {
                    // history.push('/admin/films/add')
                }}>Thêm </button>
                <div className='w-1/2'>
                    <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                </div>
            </div>
            <Table dataSource={userLogin} columns={columns} />;

        </div>
    )
}
