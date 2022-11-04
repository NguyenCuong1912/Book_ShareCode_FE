import React from 'react'
import Slider from "react-slick";
export default function SlickHeader() {

    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    };
    return (
        <div className='static'>
            <Slider {...settings}>
                <div>
                    <img src='img/slide/ms_banner_img1.png' alt='' />
                </div>
                <div>
                    <img src='img/slide/ms_banner_img2.png' alt='' />
                </div>
                <div>
                    <img src='img/slide/ms_banner_img3.png' alt='' />
                </div>
                <div>
                    <img src='img/slide/ms_banner_img4.png' alt='' />
                </div>
                <div>
                    <img src='img/slide/ms_banner_img5.png' alt='' />
                </div>
            </Slider>
        </div>
    )
}
