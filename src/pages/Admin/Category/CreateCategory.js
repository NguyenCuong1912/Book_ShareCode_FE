import React, { Fragment } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { CreateCategoryAction } from '../../../redux/Actions/QuanLyCategoryAction';
export default function CreateCategory() {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
        },

        onSubmit: values => {
            dispatch(CreateCategoryAction(values))
        },
    });

    return (
        <Fragment>
            <div className='grid grid-cols-7'>
                <div className='col-span-3 col-start-3 mt-32 h-72 rounded-lg shadow-2xl bg-white p-4'>
                    <h1 className='text-center text-4xl font-bold text-red-500'>Thêm loại sách</h1>
                    <div className='p-4'>
                        <form onSubmit={formik.handleSubmit}>
                            <input type="text" name='name' onChange={formik.handleChange} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Tên loại sách..." />
                            <div className='text-end mt-16'>
                                <button type='submit' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-900' >Thêm </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
