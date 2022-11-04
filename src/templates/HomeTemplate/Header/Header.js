import React, { Fragment } from 'react'
import { Input } from 'antd';

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineWifi,
    AiTwotonePhone,
    AiFillMail,
    AiOutlineLogin,
    AiOutlineForm,
    AiOutlineHeart,
    AiFillShopping,
} from 'react-icons/ai';
import NavbarNew from '../../../components/Header/NavbarNew';
import NavbarInfo from '../../../components/Header/NavbarInfo';
import NavbarMenu from '../../../components/Header/NavbarMenu';
import { NavLink } from 'react-router-dom';

const { Search } = Input;
const onSearch = (value) => console.log(value);

export default function Header() {
    return (
        <Fragment>
            <div className='h-6 bg-red-700'>
                <div className='grid grid-cols-12'>
                    <div className='col-start-4 flex text-white'>
                        <AiFillFacebook className='text-2xl cursor-pointer' />
                        <AiFillInstagram className='text-2xl mx-3 cursor-pointer' />
                        <AiFillYoutube className='text-2xl cursor-pointer' />
                    </div>
                    <div className='text-white flex col-span-3'>
                        <AiOutlineWifi className='text-2xl rotate-45 mx-2' />
                        <marquee className="text-base font-semibold">Chào mừng bạn đến với Kim Đồng Book. Nếu bạn cần giúp đỡ, hãy liên hệ với chúng tôi qua hotline: (+84) 19001996 hoặc email: cskh_online@kimdong.com.vn.</marquee>


                    </div>
                    <div className='text-white flex col-span-3 ml-20'>
                        <div className='flex cursor-pointer'>
                            <AiTwotonePhone className='text-2xl rotate-90' />
                            <span className='font-semibold'>1900 1996</span>
                        </div>
                        <div className='ml-4 flex cursor-pointer'>
                            <AiFillMail className='text-2xl' />
                            <span className='font-semibold'>cskh_online@kimdong.com.vn.</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='h-32 border-b-2'>
                <div className='grid grid-cols-6'>
                    <div className='col-start-2 col-span-4'>
                        <div className='grid grid-cols-3 mx-20'>
                            <div className='py-12 pr-16'>
                                <Search placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} />
                            </div>
                            <div className='py-4 px-36'>
                                <img src='img/logo.png' alt='' />
                            </div>
                            <div className='py-12 grid grid-cols-3'>
                                <NavLink to='' className='flex py-2 text-black hover:text-red-500'>
                                    <AiOutlineLogin className='text-lg my-1 mx-2' />
                                    <span>Đăng nhập</span>
                                </NavLink>
                                <NavLink to='' className='flex py-2 text-black hover:text-red-500'>
                                    <AiOutlineForm className='text-lg my-1 mx-2' />
                                    <span>Đăng ký</span>
                                </NavLink>
                                <div className='flex pt-1'>
                                    <div className='mx-2 flex'>
                                        <AiOutlineHeart className='text-2xl my-1 hover:text-red-500 cursor-pointer' />
                                        <div className='h-5 w-5 rounded-full bg-red-500 text-white'>
                                            <span className='ml-1'>2</span>
                                        </div>
                                    </div>
                                    <div className='mx-2 flex'>
                                        <NavLink to=''>
                                            <AiFillShopping className='text-2xl my-1 text-black hover:text-red-500' />
                                        </NavLink>
                                        <div className='h-5 w-5 rounded-full bg-red-500 text-white'>
                                            <span className='ml-1'>2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-8 w-full absolute z-10'>
                <div className='grid grid-cols-5'>
                    <div className='col-start-2 col-span-3 h-8' style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                        <div className='flex'>
                            <div className='flex text-white font-bold bg-red-600 h-8 py-1 w-1/4'>
                                <NavbarMenu />
                            </div>
                            <div className='col-span-4 flex'>
                                <div className='text-base ml-4 mt-1'>
                                    <NavbarNew />
                                </div>
                                <div className='text-base ml-4 mt-1'>
                                    <NavbarInfo />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
