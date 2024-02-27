import React from "react";

const NavBar = () => {
  return (
    <div className=" bg-gray-800 sm:h-12 h-20 flex sm:flex-row flex-col-reverse gap-4 justify-evenly items-center sm:p-2 p-3">
      <div>
        <input className=" rounded-tl-md rounded-bl-md w-48" type="Search" />
        <button className=" bg-white px-2 rounded-tr-md rounded-br-md"><i className="fa-solid fa-magnifying-glass text-black"></i></button>
      </div>
      <div className=" flex justify-evenly gap-8">
        <a href="#" className=" text-white">Categories</a>
        <a href="#" className=" text-white">Website Builders</a>
        <a href="#" className=" text-white">Today's deals</a>
      </div>
    </div>
  );
};

export default NavBar;
