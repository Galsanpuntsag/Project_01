import React from "react";

import DataChange from "./DataChange";
import { FaHouseChimney } from "react-icons/fa6";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ExpenceList = () => {
  return (
    <div className="flex flex-col justify-between w-full 2xl:mr-[200px] md:mx-10 bg-white mt-4 2xl:mt-8 rounded-xl">
      <div className="">
        <div className="flex justify-between mt-4 2xl:mt-8">
          <div className="flex gap-3 ml-6 mt-3">
            <button className="w-5 h-5 bg-slate-400 rounded-md ml-5">
              <IoIosArrowBack />
            </button>
            <h className="font-bold "> Last 30 Days</h>
            <button className="w-5 h-5 bg-slate-400 rounded-md">
              <IoIosArrowForward />
            </button>
          </div>
          <select className="select select-bordered w-full max-w-xs mr-5">
            <option disabled selected>
              Newest first
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="flex flex-col justify-between ">
          <div className="mt-10 mx-10 bg-slate-200 rounded-xl p-3 w-11/12 h-1-">
            <div className="flex justify-between ">
              <div className="flex w-full gap-5 ">
                <button className="">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                </button>
                <h> Select All</h>
              </div>
              <button>35000₮</button>
            </div>
          </div>

          <div className="">
            <div className="card w-full shadow-xl mt-10 ">
              <div className="card-body">
                <h1 className="font-semibold "> Today</h1>
                <DataChange />
                <h1 className="font-semibold "> Yesterday</h1>
                <DataChange />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenceList;
