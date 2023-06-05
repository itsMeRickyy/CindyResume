import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

const HireMe = () => {
  return (
    <div>
      <Swiper
        className=""
        modules={[Autoplay]}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
            clickable: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
            clickable: true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: false,
          },
        }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="h-72 md:w-60 md:h-60 swiper-slide flex justify-center items-center">
          <div class="w-full h-full transition-all  duration-300 group overflow-hidden flex items-center md:hover:w-[95%]">
            <div class=" w-full h-full ">
              <div className="flex flex-col items-center h-full">
                <h1 className="mb-10 mt-5">*HIRE ME!</h1>
                <h1 className="text-3xl">Tangerang</h1>
                <h1 className="text-[22px] mt-2">Ladycindyyy15@gmail.com</h1>
                <h1 className="text-2xl mt-5">+62 851-5617-5943</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-72 cursor-grabmd:w-60 md:h-60 swiper-slide flex justify-center items-center ">
          <div class="w-full h-full transition-all  duration-300 group overflow-hidden flex items-center md:hover:w-[95%]">
            <div class=" w-full h-full py-10">
              <div className="grid grid-cols-3 grid-rows-3 gap-5  h-full pr-10">
                <div className="bg-slate-800 w-14 h-14 translate-x-3 flex justify-center items-center rounded-full">
                  <div className="w-5 h-5 m-auto  fill-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M208 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V172.9l122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L352 256l122 70.4c15.3 8.8 20.5 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L304 339.1V480c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V339.1L86 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7c-8.8-15.3-3.6-34.9 11.7-43.7L160 256 38 185.6c-15.3-8.8-20.5-28.4-11.7-43.7l16-27.7C51.1 98.8 70.7 93.6 86 102.4l122 70.4V32z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-orange-400 col-span-2 w-[80%] md:translate-x-0 text-white flex justify-center items-center rounded-full">
                  <h1>Pembukuan</h1>
                </div>
                <div className="bg-slate-800 w-[80%] col-span-2 text-white flex justify-center items-center rounded-full">
                  <h1>Pemasaran</h1>
                </div>
                {/* <div></div> */}
                <div className="bg-yellow-200 -ml-8 md:-ml-16 w-40 -translate-x-5 md:translate-x-3 text-slate-800 flex justify-center items-center rounded-full">
                  <h1>Pengembangan</h1>
                </div>
                <div className="bg-slate-200 -mr-16 col-start-1 text-slate-800 flex justify-center items-center rounded-full">
                  <h1>Data Stock</h1>
                </div>
                <div className="bg-purple-500 col-span-2 w-[90%] translate-x-14  text-white flex justify-center items-center rounded-full">
                  <h1>Freelance</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-72 md:w-60 md:h-60 swiper-slide flex justify-center items-center">
          <div class="w-full h-full transition-all  duration-300 group overflow-hidden flex items-center md:hover:w-[95%]">
            <div class=" w-full h-full flex justify-center items-center">
              <div className=" h-60 w-60 rounded-full overflow-hidden bg-orange-300">
                <img className="scale-150 translate-y-10" src="/images/working-office.jpg" alt="" />
                {/* <div className="w-72 h-32 mx-auto mt-20 rotate-45 bg-white  rounded-full"></div> */}
                {/* <div className="-translate-y-52 w-72 h-32 mx-auto mt-20 -rotate-45 bg-white rounded-full"></div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full h-[1px] bg-slate-700 mb-10 my-5 mt-5 md:mt-11"></div>
    </div>
  );
};

export default HireMe;
