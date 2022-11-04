import React, { useEffect, Fragment } from 'react'
import { Table, Input } from 'antd';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCategoryAction } from '../../../redux/Actions/QuanLyCategoryAction';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { DeleteCateAction } from './../../../redux/Actions/QuanLyCategoryAction';


const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function QuanLyCategory() {
    const dispatch = useDispatch();

    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);

    useEffect(() => {
        dispatch(GetAllCategoryAction());
    }, [])


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Loại sách',
            dataIndex: 'name',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isActive',
            render: (text, cate) => {
                return <Fragment>
                    {cate.isActive === true ? <span className='text-green-500'>Active</span> : <span className='text-red-500'>inActive</span>}
                </Fragment>
            }
        },
        {
            title: '',
            dataIndex: 'id',
            render: (text, cate) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        history.push(`/admin/category/edit/${cate.id}`)
                    }}>
                        <EditOutlined style={{ fontSize: 25 }} />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa' onClick={() => {
                        dispatch(DeleteCateAction(cate.id))
                    }}>
                        <DeleteOutlined style={{ fontSize: 25 }} />
                    </button>
                </div>
            },
        },
    ]
    return (
        <div className='container mt-4'>
            <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý loại sách</h2>
            <div className='my-10 flex justify-between'>
                <button type='button' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-900' onClick={() => {
                    history.push('/admin/category/create')
                }}>Thêm </button>
                <div className='w-1/2'>
                    <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                </div>
            </div>
            <Table dataSource={lstCate} columns={columns} rowKey='id' />;

        </div>
    )
}
