import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Carousel.scss";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      speed={900}
      effect="fade"
    >
      <SwiperSlide>
        <div className="slide-image">Slide 1</div>
      </SwiperSlide>

      {/* more slides halna baki xa hai */}
    </Swiper>
  );
}
