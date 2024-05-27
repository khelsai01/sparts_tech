import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-end bg-sky-300 p-4">
      <ul className=" sm:w-1/2 cursor-pointer lg:1/2 flex justify-evenly mt-3 text-white  text-lg font-medium font-serif  gap-2 ">
        <li className="hover:font-semibold hover:text-yellow-400">
          Our Customer
        </li>
        <li className="hover:font-semibold hover:text-yellow-400">
          spArts Advantage
        </li>
        <li className="hover:font-semibold hover:text-yellow-400">
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
