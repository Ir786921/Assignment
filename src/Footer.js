import React from "react";

const Footer = () => {
  return (
    <div className=" w-3/4  p-2 flex justify-evenly sm:justify-evenly text-gray-400">
      <div className=" flex flex-col gap-6 p-2">
        <h1 className=" text-xl">Category</h1>
        <a href="#">Web Builder</a>
        <a href="#">Hosting</a>
        <a href="#">Data Center</a>
        <a href="#">Robotic-Automation</a>
      </div>
      <div className=" flex flex-col gap-5 p-2">
        <h1 className=" text-xl">Contact</h1>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Term Of Services</a>
        <a href="#">Category</a>
        <a href="#">About</a>
      </div>
      <div className="">
        <a href="#">
          <h1 className=" text-center p-2 ">
            United State &nbsp;<i className="fa-solid fa-caret-down"></i>
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;
