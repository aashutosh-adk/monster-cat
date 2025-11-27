import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Carousel.scss";
import nauliImg from "../../assests/Images/nauli.jpg";
import babyImg from "../../assests/Images/baby.jpg";
import radhaImg from "../../assests/Images/radha.jpg";
import rukumImg from "../../assests/Images/rukum-maikot.jpg";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const songs = [
    {
      id: 1,
      title: "NAULI BANIAMA",
      artist: "Prashant Siwakoti",
      image: nauliImg,
    },
    {
      id: 2,
      title: "BABY",
      artist: "Ujan Shakya",
      image: babyImg,
    },
    {
      id: 3,
      title: "RADHA",
      artist: "Swoopna Suman ft. Abhigya",
      image: radhaImg,
    },
    {
      id: 4,
      title: "RUKUM MAIKOT",
      artist: "SD Yogi ,Shanti shree pariyar",
      image: rukumImg,
    },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={900}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="carousel-swiper"
      >
        {songs.map((song) => (
          <SwiperSlide key={song.id}>
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${song.image})` }}
            >
              <div className="slide-content">
                <div className="slide-text">
                  <h2 className="slide-title">{song.title}</h2>
                  <p className="slide-artist">{song.artist}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Indicators */}
      <div className="carousel-indicators">
        {songs.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
