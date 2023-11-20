import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

const CardItems = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center gap-10 mt-5 p-5">
        <div className="w-[250px] bg-transparent h-[140px]">
          <img src="https://media.istockphoto.com/id/656624854/photo/isolated-credit-card-with-chip.jpg?s=1024x1024&w=is&k=20&c=ErLoYI6krIZQMhHxprwjrg0M-kOIq7BGa7uEUjq-maU="></img>
        </div>
        <div className="w-[300px] h-[150px] rounded-xl bg-slate-50 px-4 py-3">
          <div className="flex flex-col">
            <div className="flex gap-3 ">
              <div className="mt-1">
                {" "}
                <FaDotCircle />
              </div>
              <h className=" text-s mb-2">Your Income</h>
            </div>
            <div className="border-b-2 border-indigo-500"></div>
            <h1 className="text-2xl weight-bold mt-2">1 200 000₮</h1>
            <h2 className="text-[10px] weight-bold text-slate-400">
              Your income amount
            </h2>
            <div className="flex gap-5 mt-3">
              <div className="mt-1">
                {" "}
                <FaArrowAltCircleUp />
              </div>
              <h3 className=""> 32% from last month</h3>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[150px] rounded-xl bg-slate-50 px-4 py-3">
          <div className="flex flex-col">
            <div className="flex gap-3 ">
              <div className="mt-1">
                {" "}
                <FaDotCircle />
              </div>
              <h className=" text-s mb-2">Your Income</h>
            </div>
            <div className="border-b-2 border-indigo-500"></div>
            <h1 className="text-2xl weight-bold mt-2">1 200 000₮</h1>
            <h2 className="text-[10px] weight-bold text-slate-400">
              Your income amount
            </h2>
            <div className="flex gap-5 mt-3">
              <div className="mt-1">
                {" "}
                <FaArrowAltCircleUp />
              </div>
              <h3 className=""> 32% from last month</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
