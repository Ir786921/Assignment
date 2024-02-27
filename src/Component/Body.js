import React from "react";
import RectangleCard from "./RectangleCard";
import SquareCard from "./SquareCard";

const Body = () => {
  return (
    <>
      <div className=" w-3/4 bg-white p-2">
        <div className=" ">
          <h1 className=" text-2xl p-2">Best Website Builder in the Us</h1>
          <hr style={{ height: "3px", color: "", background: "#F1F1F2" }} />
          <div className=" flex justify-between p-1 sm:flex-row flex-col">
            <div>
              <i className="fa-solid fa-circle-check text-gray-500"></i> &nbsp;
              <span className=" text-sm text-[#788193]">
                Last Used - 23 february,2024{" "}
              </span>{" "}
            </div>
            <div>
              <i className="fa-solid fa-circle-exclamation text-gray-600"></i>{" "}
              &nbsp;
              <span className="text-[#788193]">Advertising Closure</span>
            </div>

            <div>
              <span className="text-[#788193]">
                Top Relevent <i className="fa-solid fa-caret-down"></i>
              </span>
            </div>
          </div>
          <hr style={{ height: "3px", color: "grey", background: "#F1F1F2" }} />
          <br />
          <div className=" flex flex-wrap gap-8">
            <button className=" shadow-md p-2 rounded-lg ">Tools</button>
            <button className=" shadow-md p-2 rounded-lg ">Aws Builder</button>
            <button className=" shadow-md p-2 rounded-lg ">Start Build</button>
            <button className=" shadow-md p-2 rounded-lg">
              Build Supplies
            </button>
            <button className=" shadow-md p-2 rounded-lg">Tooling</button>
            <button className=" shadow-md p-2 rounded-lg">Blue Hosting</button>
          </div>
          <br />
          <div className=" gap-4">
            <span className="text-[#788193] text-xs">Home</span>&nbsp;&nbsp;
            <i class="fa-solid fa-greater-than text-xs"></i>&nbsp;&nbsp;
            <span className="text-[#788193] text-xs">Hosting1</span>&nbsp;&nbsp;
            <i class="fa-solid fa-greater-than text-xs"></i>&nbsp;&nbsp;
            <span className="text-[#788193] text-xs">Hosting2</span>&nbsp;&nbsp;
            <i class="fa-solid fa-greater-than text-xs"></i>&nbsp;&nbsp;
            <span className="text-[#788193] text-xs">Hosting3</span>
          </div>
        </div>
        <br />
        <RectangleCard
          remark="Exceptional"
          rating="9.8"
          tag="Best Choice"
          icon="fa-trophy"
        />
        <RectangleCard
          remark="Excellent"
          rating="9.5"
          tag="Best Value"
          icon="fa-diamond"
        />
        <RectangleCard
          remark="Exceptional"
          rating="9.3"
          tag="In Demand"
          icon="fa-rotate-right"
        />
        <br />
        <h1 className=" text-2xl">Releated Deals You might like for</h1>
        <br />
        <div className=" flex p-2 flex-wrap justify-between sm:flex-row flex-col gap-4">
          <SquareCard />
          <SquareCard />
          <SquareCard />
          <SquareCard />
        </div>
        <br />
        <br />
        <div className=" flex justify-between  sm:flex-row flex-col gap-5">
          <h1 className=" text-2xl">Sign up and get Exclusive special deals</h1>

          <div className=" flex justify-start">
            <input
              type="email"
              name=""
              id=""
              className=" p-2 rounded-tl-md rounded-bl-md"
            />
            <button className=" bg-blue-700 p-2 rounded-tr-md rounded-br-md">
              Signup
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Body;
