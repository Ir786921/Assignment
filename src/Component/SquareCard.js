import React from "react";
import Image from "../Assest/laptops.png";

const SquareCard = () => {
  return (
    <div className=" sm:w-52 w-full rounded-md bg-white p-2 shadow-lg">
      <div className=" flex justify-center">
        <img src={Image} alt="" />
      </div>
      <div className=" flex gap-2 justify-center mt-2">
        <span className=" bg-gray-300 p-1 rounded-md text-[10px] text-blue-700">
          20% off
        </span>{" "}
        <span className=" bg-gray-300 p-1 rounded-md text-[10px] text-blue-700">
          Limited Time
        </span>
      </div>
      <h3 className=" text-center mt-2">
        <strong>Web Builder</strong>
      </h3>
      <p className="mt-1 text-[12px] text-gray-400">
        Computer Modern clasic with wix support
      </p>
      <div className=" mt-1 text-sm">
        <span className=" font-bold">$39.96</span> &nbsp;
        <sub className=" text-gray-400">$49.96</sub> &nbsp; &nbsp;
        <span className=" text-red-500">(20% Off)</span>
      </div>
      <div className=" mt-2">
        <button className=" w-full bg-blue-700 rounded-md py-1">
          view deal
        </button>
      </div>
    </div>
  );
};

export default SquareCard;
