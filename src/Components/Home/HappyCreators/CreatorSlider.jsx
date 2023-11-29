/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Creator from './Creator';
import { EffectCoverflow, Autoplay, Mousewheel } from "swiper/modules";

const CreatorSlider = ({creators , isFetching}) => {
  

    return (
      <>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"3"}
          mousewheel={true}
          modules={[Mousewheel, EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className="mySwiper"
        >
          <>
            {isFetching ? (
              <>
                {[1, 1, 1].map((skeleton, i) => (
                  <SwiperSlide key={i}>
                    <div className="skeleton mt-10 w-80 md:w-full h-96"></div>
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <>
                {creators.map((creator) => (
                  <SwiperSlide
                    className="swiper-slide000"
                    key={creator.creatorName}
                  >
                    <Creator creator={creator}></Creator>
                  </SwiperSlide>
                ))}
              </>
            )}
          </>
        </Swiper>
      </>
    );
};

export default CreatorSlider;