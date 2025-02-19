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
            style={{ height: "60vh" }}
        >
            <SwiperSlide>
                <img src="https://bridgestonetec.com/wp-content/uploads/2024/07/Banner-.jpg" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://bridgestonetec.com/wp-content/uploads/2024/07/BT-Banner-03.jpg" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://bridgestonetec.com/wp-content/uploads/2024/07/Black-and-Red-Modern-Casino-Night-Banner-Landscape.png" alt="Slide 3" />
            </SwiperSlide>
        </Swiper>
    );
};

export default MainSlider;
