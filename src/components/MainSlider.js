import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Navigation, Autoplay, EffectFade } from "swiper/modules";

const MainSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
        >
            {[
                "https://bridgestonetec.com/wp-content/uploads/2024/07/Banner-.jpg",
                "https://bridgestonetec.com/wp-content/uploads/2024/07/BT-Banner-03.jpg",
                "https://bridgestonetec.com/wp-content/uploads/2024/07/Black-and-Red-Modern-Casino-Night-Banner-Landscape.png"
            ].map((src, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center bg-gray-100">
                    <img 
                        className="w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[400px] xl:h-[400px] object-cover"
                        src={src} 
                        alt={`Slide ${index + 1}`} 
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSlider;
