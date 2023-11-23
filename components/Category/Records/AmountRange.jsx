import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import { IoIosHome } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { GiVacuumCleaner } from "react-icons/gi";
import { FaSearchDollar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { CiBeerMugFull } from "react-icons/ci";
import { HiAcademicCap } from "react-icons/hi2";

const AmountRange = () => {
  const icons = [
    <HiAcademicCap />,

    <CiBeerMugFull />,
    <FaBrain />,
    <FaBusAlt />,
    <IoFastFood />,
    <IoIosHome />,
    <SiYourtraveldottv />,
    <GrGallery />,
    <GiVacuumCleaner />,
    <FaSearchDollar />,
    <FaPlayCircle />,
    <FaAmbulance />,
    <FaAmazonPay />,
    <SiNetflix />,
    <FaBook />,
  ];
  const [displayIcon, setDisplayIcon] = useState();
  return (
    <div className="card bg-white ml-10">
      <button
        className="btn w-10/12"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <IoMdAdd className="mt-1" />
        <h className="bold text-xl">Add Category</h>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg border-b-2">Add Category</h3>
          <div className="flex gap-4">
            <div className=" w-25 max-w-xs dropdown w-1/4 mt-2">
              <label tabIndex={0} className="btn  m-1 w-full text-3xl">
                {displayIcon}
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </label>
              <div className="flex flex-col">
                <div
                  tabIndex={0}
                  className="dropdown-content menu shadow-xl border-b-2 bg-base-100 rounded-box w-72   z-50 flex-row"
                >
                  {icons.map((icon, i) => {
                    return (
                      <div className="">
                        <div
                          onClick={() => {
                            setDisplayIcon(icon);
                          }}
                          className="p-3 text-3xl"
                        >
                          {icon}
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex flex-col justify-center mx-auto">
                    <div className=" flex border-b-2 w-full border-slate-950"></div>
                    <div className="flex flex-row gap-3 justify-center mt-2">
                      <div className="badge badge-primary badge-lg"></div>
                      <div className="badge badge-secondary badge-lg"></div>
                      <div className="badge badge-error badge-lg"></div>
                      <div className="badge badge-success badge-lg"></div>
                      <div className="badge badge-info badge-lg"></div>
                      <div className="badge badge-warning badge-lg"></div>
                      <div className="badge badge-accent badge-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn w-2/3 border-slate-700 flex flex-row justify-between mt-3">
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  className="transparent h-full p-3 ml-0 rounded-xl"
                />
              </div>
              <div className="">
                <select className="select select-bordered select-xs w-3">
                  <option disabled selected></option>
                  <option>Tiny Apple</option>
                  <option>Tiny Orange</option>
                  <option>Tiny Tomato</option>
                </select>
              </div>
            </div>
          </div>

          <button className="btn btn-accent w-full mt-5">Confirm</button>
          <form method="dialog" className=" modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </dialog>

      <div className="flex  flex-col gap-5 mt-3">
        <h className="">Amount Range</h>
        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="0"
            className="w-[100px] 2xl:w-[150px]    bg-slate-100 border border-indigo-600 rounded-[5px]"
          />
          <input
            type="text"
            placeholder="1000"
            className="w-[100px] 2xl:w-[150px]  bg-slate-100 border border-indigo-600 rounded-[5px] mr-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AmountRange;
