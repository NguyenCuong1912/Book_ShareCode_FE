import React from 'react'
import { NavLink } from 'react-router-dom';
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillYoutube,
    AiOutlineInstagram

} from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">DỊCH VỤ</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Điều khoản sử dụng</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Chính sách bảo mật</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Liên hệ</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Hệ thống nhà sách</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Tra cứu đơn hàng</NavLink>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">HỖ TRỢ</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Hướng dẫn đặt hàng</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Chính sách đổi trả - hoàn tiền</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Phương thức vận chuyển</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Phương thức thanh toán</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Chính sách khách hàng mua sỉ</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className="text-gray-600 hover:text-gray-800">Chính sách khách hàng cho trường học</NavLink>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NHÀ XUẤT BẢN KIM ĐỒNG</h2>
                        <nav className="list-none mb-10">
                            <span>Giám đốc: Bùi Tuấn Nghĩa</span>
                            <br />
                            <span>Địa chỉ: Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội</span>
                            <br />
                            <span>Số điện thoại: 1900 1996</span>

                            <div>
                                <span>Email:</span>
                                <br />
                                <NavLink to='' className='text-red-500 hover:text-red-900'>cskh_online@kimdong.com.vn</NavLink>
                            </div>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ĐĂNG KÝ NHẬN TIN</h2>
                        <div className='my-3'>
                            <span>
                                Hãy nhập địa chỉ email của bạn vào ô dưới đây để có thể nhận được tất cả các tin tức mới nhất của NXB Kim Đồng về các sản phẩm mới, các chương trình khuyến mãi mới. NXB Kim Đồng xin đảm bảo sẽ không gửi mail rác, mail spam tới bạn.
                            </span>
                        </div>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Nhập email của bạn...' />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <NavLink to='' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src='https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=48' alt='KIM DONG' />

                    </NavLink>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <NavLink to='' className="text-gray-500 hover:text-red-500">
                            <AiFillFacebook className='text-3xl' />
                        </NavLink>
                        <NavLink to='' className="ml-3 text-gray-500 hover:text-red-500">
                            <AiFillTwitterCircle className='text-3xl' />
                        </NavLink>
                        <NavLink to='' className="ml-3 text-gray-500 hover:text-red-500">
                            <AiFillYoutube className='text-3xl' />
                        </NavLink>
                        <NavLink to='' className="ml-3 text-gray-500 hover:text-red-500">
                            <AiOutlineInstagram className='text-3xl' />
                        </NavLink>
                    </span>
                </div>
            </div>
        </footer>

    )
}
