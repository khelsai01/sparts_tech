import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow-500 h-72 font-serif flex justify-center items-center">
      <div className=" w-[50%]">
        <div className="text-center text-white mb-4">
          <h1 className="font-medium text-[2rem]">Stay Updated</h1>
          <p className="text-[1.1rem]">
            Get the latest updates on academics new you!
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row  justify-evenly  w-[90%] m-auto gap-2">
          <input
            type="email"
            placeholder="E-mail"
            className="w-[70%] sm:w-full h-10 rounded-lg px-2 border-0 m-auto"
          />

          <button className="bg-sky-300 p-2 rounded-lg px-4 border-0 text-white sm:w-1/2 m-auto lg:mt-0">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
