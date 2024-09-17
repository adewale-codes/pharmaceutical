"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import UserCard from "./UserCard";

interface UserCardSliderProps {
  users: {
    id: string;
    name: string;
    role: string;
    image: string;
    description: string;
  }[];
}

const UserCardSlider: React.FC<UserCardSliderProps> = ({ users }) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <UserCard {...user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserCardSlider;
