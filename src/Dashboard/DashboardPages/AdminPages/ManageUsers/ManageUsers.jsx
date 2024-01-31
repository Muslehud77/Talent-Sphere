/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper/modules";

import UserCard from "./UserCard";
import useAllUsers from "../../../../Api/useAllUsers";
import SectionHeading from "../../../../Shared/SectionHeading/SectionHeading";
import ManageUsersTable from "./ManageUsersTable";



const ManageUsers = () => {
const { allUsers, isFetching, refetch } = useAllUsers();


  return (
    <div className="space-y-10">
        <SectionHeading head={'manage users'}></SectionHeading>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
        modules={[EffectCoverflow]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
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
              {[1, 1, 1, 1, 1].map((skeleton, i) => (
                <SwiperSlide key={i}>
                  <div className="skeleton w-72 h-56"></div>
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {allUsers.map((user) => (
                <SwiperSlide className="swiper-slide000" key={user._id}>
                  <UserCard user={user}></UserCard>
                </SwiperSlide>
              ))}
            </>
          )}
        </>
      </Swiper>
      <ManageUsersTable users={allUsers} refetch={refetch} />
    </div>
  );
};

export default ManageUsers;
