import React from "react";
import RecordRange from "./RecordRange";

const Figure = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-3 mt-5 ">
        <div className="w-2/5 bg-white p-3 rounded-xl">
          <h className="">Income Expense</h>
          <div className="border-b-2 border-indigo-500 "></div>
          <div className="flex justify-center items-center mt-3 ">
            <div className="flex flex-col text-[10px] mr-3 gap-4">
              <h>3000000</h>
              <h>2000000</h>
              <h>1000000</h>
              <h>0</h>
            </div>
            <div className="">
              <img src="Frame.png"></img>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-2/5 gap-3">
          <div className=" bg-white  p-3 rounded-xl">
            <div className="flex justify-between">
              <h className="">Income Expense</h>
              <h1>2023.11.20</h1>
            </div>
            <div className="border-b-2 border-indigo-500  "></div>
            <div className=" mt-3">
              <img src="Frame 109.png"></img>
            </div>
          </div>
        </div>
      </div>
      <RecordRange />
    </div>
  );
};

export default Figure;
