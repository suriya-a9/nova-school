import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./NewsEvents.css";

const data = [
    {
        title: "Smart Classroom",
        description: "Our classrooms are Spacious Fairy and equipped with digital modules",
        image: "/nova-school/assets/banner.webp",
        subtext: "6 April, 2025",
        url: "/"
    },
    {
        title: "Smart Classroom",
        description: "Our classrooms are Spacious Fairy and equipped with digital modules",
        image: "/nova-school/assets/banner.webp",
        subtext: "6 April, 2025",
        url: "/"
    },
    {
        title: "Smart Classroom",
        description: "Our classrooms are Spacious Fairy and equipped with digital modules",
        image: "/nova-school/assets/banner.webp",
        subtext: "6 April, 2025",
        url: "/"
    },
    {
        title: "Smart Classroom",
        description: "Our classrooms are Spacious Fairy and equipped with digital modules",
        image: "/nova-school/assets/banner.webp",
        subtext: "6 April, 2025",
        url: "/"
    },
    {
        title: "Smart Classroom",
        description: "Our classrooms are Spacious Fairy and equipped with digital modules",
        image: "/nova-school/assets/banner.webp",
        subtext: "6 April, 2025",
        url: "/"
    },
];

const NewsEvents = () => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, FreeMode]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                loop={true}
                // autoplay={{ delay: 2500, disableOnInteraction: false }}
                freeMode={true}
                grabCursor={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                    1280: { slidesPerView: 3, spaceBetween: 40 },
                    1500: { slidesPerView: 4, spaceBetween: 40 }  
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="carousel-item swiper-item">
                            <img src={item.image} alt={item.title} className="carousel-image swiper-img" />

                            <span className="subtext">{item.subtext}</span>
                            <div className="carousel-content">
                                <h4 className="swiper-h4 ">{item.title}</h4>
                                <p className="swiper-p">{item.description}</p>
                                <a className="swiper-a" href={item.url}>Read more {">"}</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className='facility-contact-button' style={{ margin: '0px 44%' }}>Join Now </button>
        </div>
    );
};

export default NewsEvents;