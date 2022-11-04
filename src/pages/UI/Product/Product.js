import React, { Fragment } from 'react'
import { Checkbox, Dropdown, Space, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: 'Tùy chọn'
            },
            {
                key: '2',
                label: 'Bán chạy nhất'
            },
            {
                key: '3',
                label: 'Cũ nhất'
            },
        ]}
    />
);

export default function Product() {
    return (
        <Fragment>
            <div className='grid grid-cols-5 my-16'>
                <div className='col-start-2 col-span-3'>
                    <div className='grid grid-cols-4'>
                        <div className='mr-4'>
                            <div>
                                <div className='uppercase bg-red-600 text-white p-2 text-lg font-medium flex justify-between'>
                                    Khoảng giá
                                </div>
                                <div className='grid gird-rows border p-4'>
                                    <Checkbox>Tất cả</Checkbox>
                                    <Checkbox>Nhỏ hơn 100,000đ</Checkbox>
                                    <Checkbox>Từ 100,000đ - 200,000đ</Checkbox>
                                    <Checkbox>Từ 200,000đ - 300,000đ</Checkbox>
                                    <Checkbox>Từ 300,000đ - 400,000đ</Checkbox>
                                    <Checkbox>Từ 400,000đ - 500,000đ</Checkbox>
                                    <Checkbox>Lớn hơn 500,000đ</Checkbox>
                                </div>
                            </div>
                            <div className='my-8'>
                                <div className='uppercase bg-red-600 text-white p-2 text-lg font-medium'>Tác giả</div>
                                <div className='grid gird-rows border p-4'>
                                    <Checkbox>Khác</Checkbox>
                                </div>
                            </div>
                            <div>
                                <div className='uppercase bg-red-600 text-white p-2 text-lg font-medium'>Thể loại</div>
                                <div className='grid gird-rows border p-4'>
                                    <Checkbox>Manga - comic</Checkbox>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 px-4'>
                            <div className='flex justify-between'>
                                <h5 className='uppercase text-xl'>manga - comic</h5>
                                <div className='flex'>
                                    <span className='mt-2 mr-2'>Sắp xếp</span>
                                    <Dropdown overlay={menu}>
                                        <div className='border p-2 cursor-pointer'>
                                            <Space>
                                                Mới nhất
                                                <DownOutlined />
                                            </Space>
                                        </div>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 my-3'>
                                <div className="h-full overflow-hidden m-2">
                                    <img className="w-full object-cover object-center" src="img/book/content1/23-san-pham-day-cac-loai-sinh-vat-den-bo-vuc-tuyet-chung_bia-1_ea06de22708444509e19729be9610472_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-full overflow-hidden m-2">
                                    <img className="w-full object-cover object-center" src="img/book/content1/23-san-pham-day-cac-loai-sinh-vat-den-bo-vuc-tuyet-chung_bia-1_ea06de22708444509e19729be9610472_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full overflow-hidden m-2">
                                    <img className="w-full object-cover object-center" src="img/book/content1/23-san-pham-day-cac-loai-sinh-vat-den-bo-vuc-tuyet-chung_bia-1_ea06de22708444509e19729be9610472_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full overflow-hidden m-2">
                                    <img className="w-full object-cover object-center" src="img/book/content1/23-san-pham-day-cac-loai-sinh-vat-den-bo-vuc-tuyet-chung_bia-1_ea06de22708444509e19729be9610472_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full overflow-hidden m-2">
                                    <img className="w-full object-cover object-center" src="img/book/content1/23-san-pham-day-cac-loai-sinh-vat-den-bo-vuc-tuyet-chung_bia-1_ea06de22708444509e19729be9610472_large.png" alt="1" />
                                    <div className='text-start'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Từ điển động vật quý hiếm</h3>
                                        <div className='flex justify-between'>
                                            <span className='text-red-500 font-bold'>100.000 đ</span>
                                            <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
