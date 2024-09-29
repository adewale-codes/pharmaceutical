"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Feedback: React.FC = () => {
  const feedbackData = [
    {
      name: "Sophia Muller",
      position: "CEO of PharmaTech",
      image: "/images/p1.svg",
      feedback: `“Using Pipelinepharma has revolutionized our sourcing process...”`,
    },
    {
      name: "David Klines",
      position: "VP of Operations at MedGlobal",
      image: "/images/p2.svg",
      feedback: `“We rely on Pipelinepharma for quick and reliable access to dossiers...”`,
    },
    {
      name: "David Kline",
      position: "VP of Operations at MedGlobal",
      image: "/images/p3.svg",
      feedback: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus lectus, euismod id 
      orci sit amet, aliquet tincidunt erat. Ut dapibus lacinia turpis vulputate efficitur.”`,
    },
  ];

  return (
    <div className="p-5 md:p-24 bg-blue-200">
      <div>
        <div className="font-extrabold md:text-4xl text-2xl text-center mb-10">
          What do <span className="text-orange-600">our happy</span> customers
          <br /> say about us
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            modifierClass: "swiper-pagination-",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="py-5 mb-5"
        >
          {feedbackData.map((feedback, index) => (
            <SwiperSlide key={index} className="py-5">
              <div className="w-full flex flex-col gap-10 p-5 rounded-md h-70 bg-white shadow-lg">
                <div className="flex items-center gap-5">
                  <Image
                    src={feedback.image}
                    alt={`${feedback.name}'s profile`}
                    width={50}
                    height={50}
                  />
                  <div>
                    <div className="font-bold">{feedback.name}</div>
                    <div className="text-sm text-gray-500">
                      {feedback.position}
                    </div>
                  </div>
                </div>
                <div className="p-5 text-gray-600">{feedback.feedback}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
