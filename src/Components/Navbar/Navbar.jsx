import { useNavigate } from "react-router-dom";
import RadixUiPopOver from "./radixUiPopOver";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="flex justify-between mx-10 md:mx-16 py-4 md:py-6 ">
          <div>
            <h1 className="text-1xl font-semibold">My</h1>
            <h1 className="text-2xl font-semibold">Resume.</h1>
          </div>
          <div className="MenuBtn hidden md:flex  w-[50%] px-10 justify-around items-center">
            <a onClick={() => navigate("/")} href="" className=" w-full h-full flex text-sm justify-center items-center ">
              HOME
            </a>
            <a onClick={() => navigate("/about")} href="" className=" w-full h-full flex text-sm justify-center items-center ">
              ABOUT
            </a>
            <a href="" className=" w-full h-full flex text-sm justify-center items-center ">
              CONTACT
            </a>
          </div>
          <div className=" w-[15%] flex justify-end items-center">
            <button
              type="button"
              class="hidden md:block text-white text-sm bg-slate-950 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Hire!
              <i class="fa-light fa-arrow-up-right"></i>
            </button>
            <RadixUiPopOver />

            {/* <PopOverClick /> */}
            {/* <button
              type="button"
              class="block md:hidden text-white text-sm bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Menu+
            </button> */}
          </div>
        </div>
        <div className=" h-[1px] bg-slate-700 mx-16"></div>
      </div>
    </>
  );
};

export default Navbar;
