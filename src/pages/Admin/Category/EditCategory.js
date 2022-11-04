import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetDetailFilmAction, EditCateAction } from './../../../redux/Actions/QuanLyCategoryAction';
import { useFormik } from 'formik'




export default function EditCategory(props) {
    const { editCate } = useSelector(state => state.QuanLyCategoryReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params;
        dispatch(GetDetailFilmAction(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: editCate.id,
            name: editCate.name,
            isActive: editCate.isActive,
        },
        onSubmit: values => {
            let { id } = props.match.params;
            dispatch(EditCateAction(id, values))
        }
    })

    return (
        <Fragment>
            <div className='grid grid-cols-7'>
                <div className='col-span-3 col-start-3 mt-32 h-72 rounded-lg shadow-2xl bg-white p-4'>
                    <h1 className='text-center text-4xl font-bold text-red-500'>Sửa loại sách</h1>
                    <div className='p-4'>
                        <form onSubmit={formik.handleSubmit}>
                            <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Tên loại sách..." />
                            <div className='text-end mt-16'>
                                <button type='submit' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-900' >Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
