import React, { Fragment, useEffect } from 'react'
import { Select, Input } from 'antd';
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux';
import { GetAllCategoryAction } from '../../../redux/Actions/QuanLyCategoryAction';


export default function CreateBook(props) {
    const { TextArea } = Input;

    const dispatch = useDispatch();

    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);
    console.log({ lstCate })

    useEffect(() => {
        dispatch(GetAllCategoryAction());
    }, [])

    // const renderCate = () => {
    //     lstCate.map((item, index) => {
    //         const options = {
    //             value: item.id,
    //             label:item.name,
    //         }

    //     })
    // }

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {

        }
    })

    const arrOpt = lstCate.map
    return (
        <Fragment>
            <div>
                <h1 className='text-center text-4xl font-bold text-red-500'>Thêm sách</h1>
                <form>
                    <div className='grid grid-cols-7'>
                        <div className='col-start-2 col-span-2 mr-4'>
                            <div className='my-4'>
                                <div>Loại sách:</div>
                                <Select
                                    showSearch
                                    placeholder="Chọn loại sách..."
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    size='large'
                                    style={{ width: '50%', boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px' }}
                                    options={lstCate.map((item, index) => {
                                        return <p>{item.name}</p>
                                    })}
                                />

                            </div>
                            <div className='my-4'>
                                <div>Tên sách:</div>
                                <input type='text' className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Tên sách...' />
                            </div>
                            <div className='my-4'>
                                <div>Tác giả:</div>
                                <input type='text' className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Tác giả...' />
                            </div>
                            <div className='my-4'>
                                <div>Số trang:</div>
                                <input type='number' className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Số trang...' />
                            </div>
                            <div className='my-4'>
                                <div>Giá tiền:</div>
                                <input type='number' className='p-2 px-4 border w-1/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Giá tiền...' />
                            </div>
                            <div className='my-4'>
                                <div>Ưu đãi:</div>
                                <input type='number' className='p-2 px-4 border w-1/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Ưu đãi...' />
                            </div>
                        </div>
                        <div className='col-span-3 ml-4'>
                            <div className='my-4'>
                                <div>Mô tả:</div>
                                <TextArea rows={9} style={{ boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px' }} />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}
