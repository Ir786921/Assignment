import React from "react";
import Image from "../Assest/laptops.png";

const RectangleCard = ({ remark, rating, tag, icon }) => {
  return (
    <div className=" flex flex-col sm:flex-row mt-3 shadow-lg rounded-lg p-2">
      <div className=" w-full sm:w-1/4 bg-white p-2">
        <span className=" bg-orange-500 rounded-tr-md p-1 relative right-2 bottom-1">
          {" "}
          <i class={`fa-solid ${icon}`}></i> &nbsp;{tag}
        </span>
        <div className=" flex justify-center">
          <img src={Image} alt="Image" />
        </div>
        <h4 className=" text-center">Builder1</h4>
      </div>
      <div className=" sm:w-1/2 w-full bg-white flex flex-col gap-6 p-2">
        <p>
          <strong> WixPro 72-Inch Responsive Website Builder</strong>-
          Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue)
        </p>
        <h5>
          <strong>Main highlights</strong>
        </h5>
        <p>
          [What You Get]: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides.
        </p>
        <div>
          <button className=" text-blue-500">
            shows more <i className="fa-solid fa-caret-down"></i>{" "}
          </button>
        </div>
      </div>
      <div className=" sm:w-1/4  bg-white flex justify-around sm:flex-col flex-row-reverse">
        <div className=" flex justify-center ">
          <span className=" bg-[#F3F9FF] w-24 items-center text-center py-3 rounded-sm">
            {rating}
            <br />
            {remark}
            <br />
            <i class="fa-solid fa-star text-[#FFD43B]"></i>
            <i class="fa-solid fa-star text-[#FFD43B]"></i>
            <i class="fa-solid fa-star text-[#FFD43B]"></i>
            <i class="fa-solid fa-star text-[#FFD43B]"></i>
            <i class="fa-solid fa-star-half-stroke text-[#FFD43B]"></i>
          </span>
        </div>
        <div className=" flex justify-center items-center">
          <button className=" w-40 sm:h-12 h-12 py-1  bg-blue-500 rounded-md">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default RectangleCard;
