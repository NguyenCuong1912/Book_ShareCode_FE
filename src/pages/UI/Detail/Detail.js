import React, { Fragment } from 'react'
import ImageLensZoom from 'react-lens-zoom';
import { Rate, Tabs, Select, Input } from 'antd';
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiFillLike,
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineShareAlt,
    AiFillFacebook,
    AiFillWechat,
    AiFillEdit
} from 'react-icons/ai';
import Content4 from '../../../components/ContentSlick/Content4';

const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export default function Detail(props) {

    return (
        <Fragment>
            <div className='my-20 grid grid-cols-10'>
                <div className='col-start-3 col-span-6 flex'>
                    <div className='grid grid-cols-12 z-50'>
                        <img className='h-28 w-20 rounded mr-4 mt-4' src='img/book/content1/23-san-pham-day-cac-loai-sinh-vat-den-bo-vuc-tuyet-chung_bia-1_ea06de22708444509e19729be9610472_large.png' alt='' />
                        <div className='col-span-9'>
                            <ImageLensZoom
                                source='img/book/content1/23-san-pham-day-cac-loai-sinh-vat-den-bo-vuc-tuyet-chung_bia-1_ea06de22708444509e19729be9610472_large.png'
                                sourceHeight='507'
                                sourceWidth='365'
                                destWidth='400'
                                destHeight='400'
                            />
                        </div>
                        <div className='col-span-2 z-0' style={{ width: '760px', marginLeft: '-450px' }}>
                            <div className='border-b-2 grid grid-rows'>
                                <span className='text-xl font-medium'>
                                    TỪ ĐIỂN ĐỘNG VẬT QUÝ HIẾM - 23 NGUY CƠ ĐẨY CÁC LOÀI SINH VẬT ĐẾN BỜ VỰC TUYỆT CHỦNG {'('}KỈ NIỆM 65 NĂM NXB KIM ĐỒNG{')'}
                                </span>
                                <div className='mb-3 flex justify-between'>
                                    <div>
                                        <span>
                                            <Rate />
                                        </span>
                                        <span className='border-r-2 px-2'>0 đánh giá</span>
                                        <span className='px-2'>Đã bán: 12</span>
                                    </div>
                                    <AiOutlineHeart className='text-2xl hover:text-red-500 cursor-pointer' />
                                </div>
                            </div>
                            <div className='py-4 border-b-2 flex'>
                                <span className='text-3xl font-medium text-red-600'>135.000 <span className='underline'>đ</span></span>
                                <span className='text-xl font-medium text-gray-600 line-through py-2 px-4'>150.000 <span className='underline'>đ</span></span>
                                <span className='py-3'>{'('}Bạn đã tiết kiệm được 15.000 <span className='underline'>đ</span>{')'}</span>
                            </div>
                            <div className='py-4 grid grid-cols-2'>
                                <div>
                                    <ul className='list-disc text-base'>
                                        <li>Mã Kim Đồng: <span className='font-bold'>5222300010061</span></li>
                                        <li>ISBN: <span className='font-bold'>978-604-2-27118-9</span></li>
                                        <li>Tác giả: <span className='font-bold text-red-600'>Małgorzata Kur Małgorzata Kwapińska</span></li>
                                        <li>Đối tượng: <span className='font-bold text-red-600'>Nhi đồng (6 – 11) Thiếu niên (11 – 15)</span></li>
                                        <li>Khuôn Khổ: 24x31 cm</li>
                                        <li>Số trang: 84</li>
                                        <li>Định dạng: bìa mềm</li>
                                        <li>Trọng lượng: 500 gram</li>

                                    </ul>
                                </div>
                                <div>
                                    <span className='font-bold'>Số lượng</span>
                                    <div className='flex h-10 mt-2'>
                                        <button type='button' className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlineMinus /></button>
                                        <input type="text" name="number" class=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block w-1/4 sm:text-sm focus:ring-1" />
                                        <button type='button' className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlinePlus /></button>
                                    </div>
                                    <div className='my-4'>
                                        <button type='button' className='flex border-2 p-2 text-white bg-red-500 rounded-md text-xl hover:bg-red-700'>Thêm vào giỏ hàng <AiOutlineShoppingCart className='mt-2 mx-2 mb-1' /></button>
                                    </div>
                                    <div>
                                        <button type='button' className='flex border-2 p-2 text-white bg-red-500 rounded-md text-xl hover:bg-red-700'>Mua ngay</button>
                                    </div>
                                    <div className='mt-2 flex'>
                                        <button type='button' className='flex border-2 px-2 text-white bg-blue-500 rounded-md hover:bg-blue-700'><AiFillLike className='mx-1 mt-1' />Thích</button>
                                        <button type='button' className='flex border-2 px-2 text-white bg-blue-500 rounded-md hover:bg-blue-700'><AiOutlineShareAlt className='mx-1 mt-1' />Chia sẻ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-10'>
                <div className='col-start-3 col-span-6'>
                    <img src='img/banner/banner_home_pro_1.jpg' alt='' />
                    <div className='my-4 border-2 px-4'>
                        <Tabs defaultActiveKey="1" tabBarStyle={{ background: 'linear-gradient(180deg, red 3%, green )', color: 'white', fontWeight: 600, paddingLeft: '8px' }}>
                            <Tabs.TabPane tab="MÔ TẢ - ĐÁNH GIÁ" key="1">
                                <span className='text-base'>
                                    Bạn có biết: 60% động vật hoang dã đã tuyệt chúng trong vòng 50 năm qua, phần lớn là do tác động của con người? Có một sự thật rằng hệ sinh thái phong phú với vô vàn các loài động thực vật sẽ không tồn tại mãi mãi. Ngày hôm nay, các loài sinh vật vẫn ở quanh chúng ta, dường như rất vô tư và hạnh phúc, nhưng một ngày nào đó, chúng có thể biến mất.<br />
                                    Đáng buồn rằng đối với con người, có nhiều thứ dường như quan trọng hơn sự tồn vong của các loài động vật: những món ăn kì lạ với hương vị khó hiểu, những món đồ trang sức đóng bụi trên kệ, những bộ quần áo lỗi mốt sau một năm. Giờ đây, khi phải đối mặt với những hậu quả ngày càng nghiêm trọng, chúng ta buộc phải nhìn nhận lại xem điều gì là thực sự quan trọng với con người và với Trái Đất.<br />
                                    Với giọng kể dí dỏm, lôi cuốn của tác giả Małgorzata Kur và tranh minh họa hấp dẫn, đầy màu sắc đến từ họa sĩ Małgorzata Kwapińska, chúng ta sẽ lần lượt điểm lại những sản phẩm, dịch vụ con người vẫn đang sử dụng, thậm chí ưa chuộng, nhưng lại có tác động tiêu cực đến các loài động vật.<span className='font-medium italic'> 23 Sản Phẩm Đẩy Các Loài Sinh Vật Đến Bờ Vực Tuyệt Chủng – Từ Điển Động Vật Quý Hiếm</span> sẽ góp phần nâng cao nhận thức của mọi người về môi trường sinh thái và khuyến khích mỗi cá nhân chịu trách nhiệm cho những lựa chọn của mình.<br />
                                    ***<br />
                                    Ấn phẩm kỉ niệm 65 năm thành lập NXB Kim Đồng (1957-2022)
                                </span>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="BÌNH LUẬN" key="2">
                                <div className='flex justify-between border-b-2'>
                                    <span className='font-bold mb-12'>0 bình luận</span>
                                    <span>
                                        Sắp xếp theo
                                        <Select
                                            defaultValue="old"
                                            style={{
                                                width: 100,
                                                marginLeft: 8
                                            }}
                                            onChange={handleChange}
                                        >
                                            <Option value="new">Mới nhất</Option>
                                            <Option value="old">Cũ nhất</Option>

                                        </Select>
                                    </span>
                                </div>
                                <div className='border-b-2 py-8'>
                                    <Input size='large' style={{ paddingBottom: '15px', paddingTop: '15px' }} placeholder="Viết bình luận..." />
                                </div>
                                <span className='flex text-blue-500 cursor-pointer hover:text-blue-700 pb-6'><AiFillFacebook className='mt-1 mx-3' /> Plugin bình luận trên Facebook</span>
                            </Tabs.TabPane>

                        </Tabs>
                    </div>
                    <div className='border-2'>
                        <div className='p-4 flex justify-between'>
                            <div>
                                <h3 className='text-3xl'>Đánh giá sản phẩm</h3>
                                <div className='text-center'>
                                    <Rate style={{ fontSize: 14 }} />
                                    <div>
                                        Dựa trên 0 đánh giá
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-8'>
                                <button type='button' className='flex border-2 border-red-500 h-14 p-4 rounded text-red-500 text-base mr-2 hover:border-red-700'><AiFillWechat className='text-2xl mr-1' />Viết đánh giá</button>
                                <button type='button' className='flex border-2 border-red-500 h-14 p-4 rounded text-red-500 text-base hover:border-red-700'><AiFillEdit className='text-2xl mr-1' />Đặt câu trả lời</button>
                            </div>
                        </div>
                        <div className='mx-4'>
                            <Tabs defaultActiveKey="1" >
                                <Tabs.TabPane tab="Đánh giá" key="1">
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Câu hỏi & trả lời:" key="2">
                                </Tabs.TabPane>
                            </Tabs>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 mt-20'>
                        <div><hr /></div>
                        <h1 className='text-3xl text-center uppercase -mt-6'>Sách cùng thể loại</h1>
                        <div className=''><hr /></div>
                    </div>
                    <Content4 />
                    <div className='grid grid-cols-3 mt-20'>
                        <div><hr /></div>
                        <h1 className='text-3xl text-center uppercase -mt-6'>Sản phẩm đã xem</h1>
                        <div className=''><hr /></div>
                    </div>
                    <Content4 />

                </div>
            </div>
        </Fragment>

    )
}
