import React from 'react'
import { Table, Input } from 'antd';
import { history } from '../../../App';

const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function QuanLyBook() {

    const data = [
        {
            id: 1,
            name: 'ok',
            isActive: 'ok',
        }
    ]

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Tên sách',
            dataIndex: 'name',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isActive',
        }
    ]

    return (
        <div className='container mt-4'>
            <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý sách</h2>
            <div className='my-10 flex justify-between'>
                <button type='button' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-900' onClick={() => {
                    history.push('/admin/product/create')
                }}>Thêm </button>
                <div className='w-1/2'>
                    <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                </div>
            </div>
            <Table dataSource={data} columns={columns} rowKey='id' />;

        </div>
    )
}
