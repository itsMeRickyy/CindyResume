import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const ProjectSection = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <h1 className="text-center text-2xl font-JakartaSans my-10 font-semibold">Project</h1>
            <div className="md:mx-16">
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
                    spaceBetween: 50,
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
                <SwiperSlide className="h-[27rem]   swiper-slide flex justify-center items-center">
                  <div className=" py-10 flex flex-col justify-center items-center">
                    <div className="w-60 h-60  bg-blue-300 mx-auto overflow-hidden">
                      <img className="scale-150 mt-10" src="/images/project1.jpeg" alt="" />
                    </div>
                    <div className="flex flex-col justify-center  h-40">
                      <h1 className="text-center my-5 text-1xl font-bold ">Narasi Festival</h1>
                      <p className="text-center mx-10">Menjadi koordinator dan operational control di event Narasi Festival by Najwa Shihab di jakarta</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-[27rem]   swiper-slide flex justify-center items-center">
                  <div className=" py-10 flex flex-col justify-center">
                    <div className="w-60 h-60   mx-auto overflow-hidden">
                      <img className="scale-110 mt-2" src="/images/project2.jpeg" alt="" />
                    </div>
                    <divc className="flex flex-col   h-40">
                      <h1 className="text-center my-5 text-1xl font-bold ">Jajarans Festival</h1>
                      <p className="text-center mx-10">Merencanakan alur operasional selama event berlangsung</p>
                    </divc>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-[27rem]   swiper-slide flex justify-center items-center">
                  <div className=" py-10 flex flex-col justify-center">
                    <div className="w-60 h-60  bg-red-300 mx-auto"></div>
                    <div className="flex flex-col h-40">
                      <h1 className="text-center my-5 text-1xl font-bold ">Project one</h1>
                      <p className="text-center mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
      </div>
    </>
  );
};

export default ProjectSection;
