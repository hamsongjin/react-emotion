import React from 'react';
import '../style/css/main.css';
import { useState } from 'react';
// swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

function Main({onChange, value}) {
    
    return(
        <div className="container">
            <div className="box pb_20 bd_b bg_white">
                <div className='w_wrap'>
                    <div className="top_wrap ds_sb mb_10">
                        {/* <h2 className="title_h2">Calendar</h2> */}
                        <div className='d_f'>
                            <button>prev</button>
                            <button>next</button>
                        </div>
                        <div className="btn_wrap">
                            {/* <button className="btn" type="button">WEEK</button> */}
                            <button className="btn" type="button">TODAY</button>
                        </div>
                    </div>
                    <div className="calendar_wrap">
                    {/* <Calendar onChange={onChange} value={value} /> */}
                        <div className='calendar_head mb_4'>
                            <span className='colr_red'>일</span>
                            <span>월</span>
                            <span>화</span>
                            <span>수</span>
                            <span>목</span>
                            <span>금</span>
                            <span className='colr_blue'>토</span>
                        </div>
                        {/* month calendar */}
                        <Swiper className='item_wrap month_calendar d_n'
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide className='item'>
                                <p className='day'>17</p>
                            </SwiperSlide>
                        </Swiper>
                        {/* week calendar */}
                        <Swiper className='item_wrap week_calendar '
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            slidesPerView={7}
                            slidesPerGroup={7}
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide className='item '><p className='day active'>17</p></SwiperSlide>
                            <SwiperSlide className='item '><p className='day today active'>18</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>19</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>20</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>21</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day active'>22</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>23</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>24</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>25</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>26</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>27</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>28</p></SwiperSlide>
                            <SwiperSlide className='item'><p className='day'>29</p></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='box'>

            </div>
        </div>
    )
}

export default Main;