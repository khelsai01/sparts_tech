import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-end bg-sky-300 p-4">
      <ul className=" sm:w-1/2 cursor-pointer lg:1/2 flex justify-evenly mt-3 text-white text-lg font-medium font-serif  gap-2 ">
        <li>Our Customer</li>
        <li>spArts Advantage</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
