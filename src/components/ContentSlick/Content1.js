import React, { Fragment, useRef } from 'react'
import Slider from "react-slick";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
export default function Content1() {
    const ref = useRef({});

    const next = () => {
        ref.current.slickNext();
    };

    const previous = () => {
        ref.current.slickPrev();
    };
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Fragment>
            <div className='col-start-2 col-span-4 my-14 text-center'>
                <div className='text-2xl font-bold'>BỘ ẤN PHẨM KỈ NIỆM 65 NĂM THÀNH LẬP NHÀ XUẤT BẢN KIM ĐỒNG</div>
                <div className='grid grid-cols-12 my-8'>
                    <div className='grid content-center ml-12'>
                        <button className="button" onClick={previous}>
                            <AiFillLeftCircle className='text-3xl text-red-500 hover:text-red-700' />
                        </button>
                    </div>
                    <div className='col-span-10'>
                        <Slider ref={ref} {...settings}>
                            <div className='px-2'>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-full object-cover object-center" src="img/book/content1/23-san-pham-day-cac-loai-sinh-vat-den-bo-vuc-tuyet-chung_bia-1_ea06de22708444509e19729be9610472_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='px-2'>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-full object-cover object-center" src="img/book/content1/dat-nuoc-gam-hoa---bia_0ffe3dbcbff248f49887a556b86b5502_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='px-2'>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-full object-cover object-center" src="img/book/content1/mot-nua-cua-the-gioi_355acaa917f944aaa915d6d52f82bea7_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='px-2'>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-full object-cover object-center" src="img/book/content1/nhung-bai-dien-van-lam-thay-doi-the-gioi_bia-1_7ae332181a444ac5911d06c7f066f410_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='px-2'>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-full object-cover object-center" src="img/book/content1/su-sinh-thanh-the-gioi_622ef45f13a2438899e450bb4228d48f_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='px-2'>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-full object-cover object-center" src="img/book/content1/tim-me_76ec52df32c24078812c66694f5fc4c7_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='grid content-center ml-8'>
                        <button className="button" onClick={next}>
                            <AiFillRightCircle className='text-3xl text-red-500 hover:text-red-700' />
                        </button>
                    </div>
                </div>
                <div className='text-end'>
                    <NavLink to='' className='text-red-500 hover:text-red-700 text-base'>Xem thêm {'>>'}</NavLink>
                </div>
            </div>
        </Fragment>
    )
}
