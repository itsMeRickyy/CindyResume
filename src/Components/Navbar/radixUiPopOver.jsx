import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RadixUiPopOver = () => {
  const navigate = useNavigate();
  return (
    <>
      <Popover.Root>
        <Popover.Trigger className="">
          <button
            type="button"
            class="  md:hidden text-white text-sm bg-gray-950 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5  mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Menu+
          </button>
        </Popover.Trigger>
        {/* <Popover.Anchor /> */}
        <Popover.Portal>
          <Popover.Content>
            <div className="">
              <div className="  rounded-lg bg-gray-800  w-36 ">
                <div className=" flex flex-col h-full justify-around gap-2 px-2 py-2">
                  <Link to="/" className="text-white w-full h-full flex text-sm p-2  items-center px-2 hover:bg-gray-700 rounded-lg ">
                    HOME
                  </Link>
                  <Link to="/about" className="text-white w-full h-full flex text-sm p-2  items-center px-2 hover:bg-gray-700 rounded-lg ">
                    ABOUT
                  </Link>
                  <Link to="/contact" className="text-white w-full h-full flex text-sm p-2  items-center px-2 hover:bg-gray-700  rounded-lg">
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>
            <Popover.Close />
            <Popover.Arrow className="fill-gray-700" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
};

export default RadixUiPopOver;
