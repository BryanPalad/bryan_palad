import React from "react";

// testimonials data
import { testimonials } from '../../data';

// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 justify-center items-center text-center">
                <div className="w-48 h-48 lg:w-[328px] lg-h-[328px] flex">
                    <img className='rounded-2xl h-full w-full' src={authorImg} alt=''/>
                </div>
                <div className="flex flex-col max-w-3xl">
                    <h5 className="font-body text-2xl mb-8 italic font-normal text-black dark:text-white">{authorText}</h5>
                    <div className="mb-10">
                        <p className="text-lg text-accent">{authorName}</p>
                        <p className="text-black dark:text-white">{authorPosition}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
