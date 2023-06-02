import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const PopOverClick = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative md:hidden">
        <div className="flex flex-col justify-end  h-full">
          <div className="flex justify-end ">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              class="  md:hidden text-white text-sm bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5  mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Menu+
            </button>
          </div>
        </div>
        {open && (
          <div aos="fade-up" className="bg-slate-300 absolute transition-all ease-in-out rounded-md h-28 w-full flex justify-center">
            <div className=" ">
              <div className=" flex flex-col h-full justify-around ">
                <a href="" className=" w-full h-full flex text-sm justify-center items-center ">
                  HOME
                </a>
                <a href="" className=" w-full h-full flex text-sm justify-center items-center ">
                  ABOUT
                </a>
                <a href="" className=" w-full h-full flex text-sm justify-center items-center ">
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PopOverClick;
