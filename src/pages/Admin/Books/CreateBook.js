import React, { Fragment, useEffect, useState } from 'react'
import { Select, Input } from 'antd';
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux';
import { GetAllCategoryAction } from '../../../redux/Actions/QuanLyCategoryAction';


export default function CreateBook(props) {
    const { TextArea } = Input;

    const dispatch = useDispatch();

    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);

    useEffect(() => {
        dispatch(GetAllCategoryAction());
    }, [])

    const arrOption = []
    lstCate.forEach(element => {
        const newOpt = {
            value: element.id,
            label: element.name,
        }
        arrOption.push(newOpt)
    });



    const [opt, setOption] = useState('');
    console.log({ opt })

    const onChange = (value) => {
        setOption(value)
    };





    const formik = useFormik({
        initialValues: {
            idCategory: { opt },
            name: '',
            author: '',
            pageNumber: '',
            price: '',
            discount: '',
            description: '',
        },
        onSubmit: values => {
            console.log('a', values)
        }
    })

    return (
        <Fragment>
            <div>
                <h1 className='text-center text-4xl font-bold text-red-500'>Thêm sách</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid grid-cols-7'>
                        <div className='col-start-2 col-span-2 mr-4'>
                            <div className='my-4'>
                                <div>Loại sách:</div>
                                <Select
                                    name='idCategory'
                                    showSearch
                                    placeholder="Chọn loại sách..."
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    size='large'
                                    style={{ width: '50%', boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px' }}
                                    options={arrOption}
                                />

                            </div>
                            <div className='my-4'>
                                <div>Tên sách:</div>
                                <input type='text' name='name'
                                    onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Tên sách...' />
                            </div>
                            <div className='my-4'>
                                <div>Tác giả:</div>
                                <input type='text' name='author' onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Tác giả...' />
                            </div>
                            <div className='my-4'>
                                <div>Số trang:</div>
                                <input type='number' name='pageNumber' onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Số trang...' />
                            </div>
                            <div className='my-4'>
                                <div>Giá tiền:</div>
                                <input type='number' name='price' onChange={formik.handleChange} className='p-2 px-4 border w-1/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Giá tiền...' />
                            </div>
                            <div className='my-4'>
                                <div>Ưu đãi:</div>
                                <input type='number' name='discount' onChange={formik.handleChange} className='p-2 px-4 border w-1/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Ưu đãi...' />
                            </div>
                        </div>
                        <div className='col-span-3 ml-4'>
                            <div className='my-4'>
                                <div>Mô tả:</div>
                                <TextArea name='description' onChange={formik.handleChange} rows={9} style={{ boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px' }} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='text-center p-3 border border-red-600 w-36 text-xl font-bold rounded text-red-600 hover:bg-red-600 hover:text-white'>Thêm</button>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}
