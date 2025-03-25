import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Slider1 from '../Images/slide1.jpg';
import Slider2 from '../Images/slider2.jpg';
import Slider3 from '../Images/slider3.jpg';

import { Navigation, Autoplay, EffectFade } from "swiper/modules";

const MainSlider = () => {
    return (
        <div className="relative w-full sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] overflow-hidden">
            {/* Permanent Centered Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6 z-10">
                <h2 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg">
                    Helix It Solution
                </h2>
                <p className="mt-2 text-sm md:text-lg bg-gradient-to-r from-black via-transparent to-black bg-opacity-60 px-4 py-2 rounded-lg shadow-lg">
                    EMPOWERING BUSINESSES THROUGH INNOVATIVE IT SOLUTIONS
                </p>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
            >
                {[
                    Slider1,
                    Slider2,
                    Slider3
                ].map((src, index) => (
                    <SwiperSlide key={index} className="relative">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-40"></div>
                        <img 
                            className="w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[650px] object-cover transition-all duration-1000 transform hover:scale-105"
                            src={src} 
                            alt={`Slide ${index + 1}`} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainSlider;
