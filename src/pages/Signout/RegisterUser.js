import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik'
import './../../assets/css/User.css'
import { RegisterAction } from '../../redux/Actions/QuanLyUserAction';

export default function RegisterUser() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            typeAccount: 'USER'
        },

        onSubmit: values => {
            dispatch(RegisterAction(values))
        },
    });
    return (
        <Fragment>
            <section className="text-gray-600 body-font">
                <div className="px-5 pt-48 pl-48 mx-auto">
                    <div className="p-4">
                        <div className="h-full w-2/3 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <h1 className='text-6xl text-white font-bold pt-24 pl-24 rounded-3xl background-content-user-login'><span className='text-gradient'>Đăng ký</span></h1>
                            <div className='p-8'>
                                <form onSubmit={formik.handleSubmit}>

                                    <div className='mt-4'>
                                        <div className="text-lg font-bold text-red-500 tracking-wide">Tài khoản</div>
                                        <input type='text' name='username' onChange={formik.handleChange} className="w-full text-lg py-2 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500" placeholder="Nhập tài khoản..." />
                                        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                                            <span className='text-red-400'>{formik.errors.taiKhoan}</span>
                                        )}
                                    </div>


                                    <div className="mt-4">
                                        <div className="text-lg font-bold text-red-500 tracking-wide">Mật khẩu</div>
                                        <input type='password' name='password' onChange={formik.handleChange} className="w-full text-lg py-2 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500" placeholder="Nhập mật khẩu..." />
                                        {formik.errors.matKhau && formik.touched.matKhau && (
                                            <span className='text-red-400'>{formik.errors.matKhau}</span>
                                        )}
                                    </div>
                                    <div className="mt-10 text-center">
                                        <button type='submit' className="text-white text-xl font-bold border-2 p-4 w-1/2 rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:border-red-500 from-purple-500 to-pink-500 hover:text-red-900
                      shadow-2xl background-btn-login">
                                            Đăng ký
                                        </button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
