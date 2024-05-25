import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Header = () => {
  return (
    <div
      className="h-[600px] flex flex-col pb-12"
    >
      <div className="w-full absolute">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 200"><path fill="#F7DC6F" fill-opacity="1" d="M0,256L40,240C80,224,160,192,240,170.7C320,149,400,139,480,112C560,85,640,43,720,21.3C800,0,880,0,960,21.3C1040,43,1120,85,1200,112C1280,139,1360,149,1400,154.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </div>
     
      <div className="lg:flex  md:flex-row justify-between h-[100%] md:h-[80%] z-0">
        <div className="w-[70%] mx-24">
          <h1 className="flex text-6xl text-start flex-col gap-2 mt-36">
            Find the Best<span>Activity for your</span>
            <span className="flex items-center">
              Child
              <IoIosArrowDroprightCircle className="text-sky-300 ml-56" />
            </span>
          </h1>
        </div>

        <div className="hidden lg:flex gap-0">
          <img src="./football.png" alt="spArts" className="w-[60%]" />
          <img src="./guitar.png" alt="spArts" className="w-[40%]" />
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row justify-center items-center gap-10 lg:gap-10 sm:gap-2 mx-auto w-full sm:w-1/2 lg:w-auto">
        <button className="bg-yellow-500 p-2 px-12 rounded-3xl text-white font-medium w-full sm:w-1/2 lg:w-auto">
          For Academies
        </button>
        <button className="bg-yellow-500 p-2 px-6 rounded-3xl text-white font-medium w-full sm:w-1/2 lg:w-auto">
          SpArts in your home
        </button>
      </div>
      <div className="w-full ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 400"><path fill="#a2d9ff" fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,309.3C384,309,480,299,576,266.7C672,235,768,181,864,176C960,171,1056,213,1152,202.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
  );
};

export default Header;
