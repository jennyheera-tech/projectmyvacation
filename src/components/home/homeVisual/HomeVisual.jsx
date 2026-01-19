import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper CSS (필수)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './style.css';

const HomeVisual = () => {
    return (
        <section id="homevisual">
            <Swiper
                className="main-banner"
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                loop
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={700}
            >
                <SwiperSlide>
                    <img src="/images/visual01.jpg" alt="Home" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/images/visual02.jpg" alt="Animation" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/images/visual03.jpg" alt="Movie" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HomeVisual;
