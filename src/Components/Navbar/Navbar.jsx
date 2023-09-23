import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import RadixUiPopOver from "./radixUiPopOver";
import "./navbar.css";
import HireMePopUp from "./popUpBox/popUpHireMe";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="flex justify-between mx-10 md:mx-16 py-4 md:py-6 z-50shutd">
          <div>
            <h1 className="text-1xl font-semibold">My</h1>
            <h1 className="text-2xl font-semibold">Resume.</h1>
          </div>
          <div className="MenuBtn hidden md:flex  w-[50%] px-10 justify-around items-center">
            <Link to="/" className=" w-full h-full flex text-sm justify-center items-center ">
              HOME
            </Link>
            <Link to="/about" className=" w-full h-full flex text-sm justify-center items-center ">
              ABOUT
            </Link>
            <Link to="/contact" className=" w-full h-full flex text-sm justify-center items-center ">
              CONTACT
            </Link>
          </div>
          <div className=" w-[15%] flex justify-end items-center">
            <Button>Hire!</Button>

            <RadixUiPopOver />
          </div>
        </div>
        <div className=" h-[1px] bg-slate-700 mx-16"></div>
      </div>
    </>
  );
};

export default Navbar;
