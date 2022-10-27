import React, { Fragment } from 'react'
import Content1 from '../../../components/ContentSlick/Content1'
import Content2 from '../../../components/ContentSlick/Content2'
import Content3 from '../../../components/ContentSlick/Content3'
import SlickHeader from '../../../components/ReactSlick/SlickHeader'

export default function Home() {
    return (
        <Fragment>
            <div>
                <SlickHeader />
                <div className='grid grid-cols-6'>
                    <Content1 />
                </div>
                <img src='img/banner/banner_home_pro_1.jpg' alt='banner1' />
                <div className='grid grid-cols-6'>
                    <Content2 />
                </div>
                <div className='grid grid-cols-6'>
                    <Content3 />
                </div>
                <img src='img/banner/banner_home_pro_3.png' alt='banner3' />
                <div className='grid grid-cols-6'>
                    <Content2 />
                </div>
                <img src='img/banner/banner_home_pro_4.jpg' alt='banner4' />
                <div className='grid grid-cols-6'>
                    <Content2 />
                </div>
                <img src='img/banner/banner_home_pro_5.png' alt='banner5' />
                <div className='grid grid-cols-6'>
                    <Content2 />
                </div>
            </div>

        </Fragment>
    )
}
