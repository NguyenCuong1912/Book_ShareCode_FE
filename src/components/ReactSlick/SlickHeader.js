import React from 'react'
import Slider from "react-slick";
export default function SlickHeader() {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <div className='static'>
            <Slider {...settings}>
                <div>
                    <img src='https://theme.hstatic.net/200000343865/1000938429/14/ms_banner_img1.jpg?v=48' alt='' />
                </div>
                <div>
                    <img src='https://theme.hstatic.net/200000343865/1000938429/14/ms_banner_img2.jpg?v=48' alt='' />

                </div>
                <div>
                    <img src='https://theme.hstatic.net/200000343865/1000938429/14/ms_banner_img3.jpg?v=48' alt='' />

                </div>
                <div>
                    <img src='https://theme.hstatic.net/200000343865/1000938429/14/ms_banner_img4.jpg?v=48' alt='' />

                </div>
                <div>
                    <img src='https://theme.hstatic.net/200000343865/1000938429/14/ms_banner_img5.jpg?v=48' alt='' />

                </div>
            </Slider>
        </div>
    )
}
