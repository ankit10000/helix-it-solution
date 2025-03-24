import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Graphics from "./Graphics";
import LatestBlog from "./LatestBlog";
import Portfolio from "./Portfoilio";

function ServicesSlider() {
  return (
    <section className="py-5 bg-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
        //   navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          <SwiperSlide>
            <div className="p-4 sm:p-6 md:p-10 bg-white shadow-lg rounded-3xl min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <Graphics />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 sm:p-6 md:p-10 bg-white shadow-lg rounded-3xl min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <LatestBlog />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 sm:p-6 md:p-10 bg-white shadow-lg rounded-3xl min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <Portfolio />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default ServicesSlider;
