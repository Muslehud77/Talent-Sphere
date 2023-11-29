/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay, Mousewheel } from "swiper/modules";
import RankedCard from "./RankedCard";
const RankedContestants = ({ranked,isFetching}) => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesPerView={"6"}
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
              {[1, 1, 1,1,1].map((skeleton, i) => (
                <SwiperSlide key={i}>
                  <div className="skeleton w-72 h-56"></div>
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {ranked.map((talent) => (
                <SwiperSlide className="swiper-slide000" key={talent._id}>
                  <RankedCard talent={talent}></RankedCard>
                </SwiperSlide>
              ))} 
            </>
          )}
        
        </>
      </Swiper>
    </div>
  );
};

export default RankedContestants;
