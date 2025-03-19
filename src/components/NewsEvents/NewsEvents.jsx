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
                slidesPerView={4}
                navigation={true}
                loop={true}
                // autoplay={{ delay: 2500, disableOnInteraction: false }}
                freeMode={true}
                grabCursor={true}
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
            <button className='header-contact-button' style={{ margin: '0px 44%' }}>Join Now </button>
        </div>
    );
};

export default NewsEvents;