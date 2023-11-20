import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CategoryList = () => {
  return (
    <div className="flex flex-col justify-between w-3/5 bg-white ml-10 mt-8 rounded-xl">
      <div className="">
        <div className="flex justify-between mt-5">
          <div className="flex gap-3">
            <button className="w-5 h-5 bg-slate-400 rounded-md ml-5">
              <IoIosArrowBack />
            </button>
            <h className="font-bold"> Last 30 Days</h>
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
          <div className="mt-10 mx-10">
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
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                  <div className="ml-10">
                    <div className="flex gap-20">
                      <input type="checkbox" className="checkbox" disabled />
                      <img
                        src="House.png"
                        className="bg-cyan-500 rounded-xl"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h>Lending&Renting</h>
                    <button>14:00</button>
                  </div>
                </div>
                <button className="mr-10">-10000</button>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                  <div className="ml-10">
                    <div className="flex gap-20">
                      <input type="checkbox" className="checkbox" disabled />
                      <img
                        src="House.png"
                        className="bg-cyan-500 rounded-xl"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h>Lending&Renting</h>
                    <button>14:00</button>
                  </div>
                </div>
                <button className="mr-10">-10000</button>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                  <div className="ml-10">
                    <div className="flex gap-20">
                      <input type="checkbox" className="checkbox" disabled />
                      <img
                        src="House.png"
                        className="bg-cyan-500 rounded-xl"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h>Lending&Renting</h>
                    <button>14:00</button>
                  </div>
                </div>
                <button className="mr-10">-10000</button>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                  <div className="ml-10">
                    <div className="flex gap-20">
                      <input type="checkbox" className="checkbox" disabled />
                      <img
                        src="House.png"
                        className="bg-cyan-500 rounded-xl"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h>Lending&Renting</h>
                    <button>14:00</button>
                  </div>
                </div>
                <button className="mr-10">-10000</button>
              </div>

              <div className="card-body">
                <h1 className="font-semibold "> Yesterday</h1>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                  <div className="ml-10">
                    <div className="flex gap-20">
                      <input type="checkbox" className="checkbox" disabled />
                      <img
                        src="House.png"
                        className="bg-cyan-500 rounded-xl"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h>Lending&Renting</h>
                    <button>14:00</button>
                  </div>
                </div>
                <button className="mr-10">-10000</button>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                  <div className="ml-10">
                    <div className="flex gap-20">
                      <input type="checkbox" className="checkbox" disabled />
                      <img
                        src="House.png"
                        className="bg-cyan-500 rounded-xl"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h>Lending&Renting</h>
                    <button>14:00</button>
                  </div>
                </div>
                <button className="mr-10">-10000</button>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                  <div className="ml-10">
                    <div className="flex gap-20">
                      <input type="checkbox" className="checkbox" disabled />
                      <img
                        src="House.png"
                        className="bg-cyan-500 rounded-xl"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h>Lending&Renting</h>
                    <button>14:00</button>
                  </div>
                </div>
                <button className="mr-10">-10000</button>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex gap-5">
                  <div className="ml-10">
                    <div className="flex gap-20">
                      <input type="checkbox" className="checkbox" disabled />
                      <img
                        src="House.png"
                        className="bg-cyan-500 rounded-xl"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h>Lending&Renting</h>
                    <button>14:00</button>
                  </div>
                </div>
                <button className="mr-10">-10000</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
