import React from "react";
import { Swiper, SwiperOptions } from "swiper";

const Carousel: React.FC = () => {
  const swiperParams = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  return (
    <div className="swiper mySwiper swiper-initialized swiper-horizontal swiper-pointer-events">
      <div className="swiper-wrapper">
        <div className="swiper-slide w-72" role="group" aria-label="3 / 9">
          Slide 3
        </div>
        <div className="swiper-slide w-72" role="group" aria-label="3 / 9">
          Slide 3
        </div>
      </div>
    </div>
  );
};

export default Carousel;
