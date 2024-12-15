import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


import Card from "./Card";

const SliderSection = ({ title, videos }) => {
  return (
    <section className="slider-section">
      <h2>{title}</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
             320: { slidesPerView: 2,spaceBetween: 20},
          480: { slidesPerView: 3, spaceBetween: 30 },
          640: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="slider"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <Card video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderSection;