"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import { Swiper as SwiperType } from "swiper"; 
import "swiper/css";
import { useState, useRef } from "react";

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null); 

  const slides = [
    { src1: "/slide1.jpg",src2:"/slide2.jpg", alt: "Image 1" },
    { src1: "/slide3.jpg",src2:"/slide4.jpg", alt: "Image 1" },
    { src1: "/slide5.jpg",src2:"/slide6.jpg", alt: "Image 1" },
    { src1: "/slide7.jpg",src2:"/slide8.jpg", alt: "Image 1" },
  ];

  return (
    <>
    <div>
      {/* Main Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-between items-center md:w-full w-[95wv] cursor-grab">
         
            <img src={slide.src1} alt={slide.alt} className="md:h-[560px] md:w-1/2 w-[95vw] h-[300px] object-cover rounded-lg md:mr-1"/>     
            <img src={slide.src2} alt={slide.alt} className="md:h-[560px] md:w-1/2 w-[95vw] h-[300px] object-cover rounded-lg md:ml-1" />
     

            </div>
              </SwiperSlide>
        ))}
      </Swiper>

    <div className="hidden md:flex justify-center mt-8 gap-4 mb-4 rounded-lg">
    {slides.map((_, index) => (
      <div
        key={index}
        onClick={() => swiperRef.current?.slideToLoop(index)}
        className={`h-[4px] w-20 rounded-2xl cursor-pointer transition-all ${
          index === activeIndex ? "bg-black" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
    </div>


{/* only for border  */}

    <div className="w-[100%] mx-auto border-b-[1px]  border-gray-400 mt-10"></div>
    
  </>
  );
}
