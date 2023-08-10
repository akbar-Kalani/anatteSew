"use client";




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';



const imageData = [
    {
        title: "Better Sleep",
        image: "img/sleep.jpg",
        descr:  ""
    },
    {
        title: "Better Health",
        image: "img/health.jpg",
        descr:  ""
    },
    {
        title: "Get rid of addiction, smoking, and drinking.",
        image: "img/non-smoker.jpg",
        descr:  ""
    },
    {
        title: "Better Relationships",
        image: "img/people.jpg",
        descr:  ""
    },
    {
        title: "Get rid of Anxiety and depression.",
        image: "img/depression.jpg",
        descr:  ""
    },
    {
        title: "Get rid of PTSD",
        image: "img/PTSD.jpg",
        descr:  ""
    },
    {
        title: "Pain relief",
        image: "img/up-close.jpg",
        descr:  ""
    },
    {
        title: "Stress relief",
        image: "img/relief.jpg",
        descr:  ""
    },
    {
        title: "Help with money problems.",
        image: "img/no-money.png",
        descr:  ""
    },
];



export default function Slider () {
    return (
        <>
            <h1 className=' text-[19px] md:text-[20px] font-bold text-center mt-10'>
                This is what you can expect from doing a session with Anette.</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                {imageData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <section className='inline-block'>
                            <img
                                src={item.image}
                                alt={item.title}
                            />
                            <div className='font-bold py-6 text-[20px]'>{item.title}</div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
