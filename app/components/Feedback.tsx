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
      name: "Andreas Gerold",
      position: "General Manager of Stragen Pharma GmbH",
      image: "images/p1.svg",
      feedback: `“The Pipelinepharma platform is incredibly easy to use, much like leading tech products...”`,
    },
    {
      name: "Sophia Muller",
      position: "CEO of PharmaTech",
      image: "images/p2.svg",
      feedback: `“Using Pipelinepharma has revolutionized our sourcing process...”`,
    },
    {
      name: "David Kline",
      position: "VP of Operations at MedGlobal",
      image: "images/p3.svg",
      feedback: `“We rely on Pipelinepharma for quick and reliable access to dossiers...”`,
    },
    {
      name: "David Kline",
      position: "VP of Operations at MedGlobal",
      image: "images/p3.svg",
      feedback: `“We rely on Pipelinepharma for quick and reliable access to dossiers...”`,
    },
    {
      name: "David Kline",
      position: "VP of Operations at MedGlobal",
      image: "images/p3.svg",
      feedback: `“We rely on Pipelinepharma for quick and reliable access to dossiers...”`,
    },
  ];

  return (
    <div className="p-5 md:p-24">
      <div>
        <div className="font-extrabold md:text-5xl text-2xl text-center">
          What do our happy customers say about us
        </div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
        //   navigation
          pagination={{ clickable: true }}
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
          className="py-5"
        >
          {feedbackData.map((feedback, index) => (
            <SwiperSlide key={index} className="py-5">
              <div className="shadow-xl w-96 flex flex-col gap-5 p-5 rounded-md h-80">
                <div className="flex items-center gap-5">
                  <Image
                    src={feedback.image}
                    alt="profile"
                    width={100}
                    height={100}
                  />
                  <div>
                    <div>{feedback.name}</div>
                    <div>{feedback.position}</div>
                  </div>
                </div>
                <div className="pt-5">{feedback.feedback}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
