import React from "react";
import { TiEye } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { MdAdd } from "react-icons/md";

const Category = () => {
  return (
    <div>
      {" "}
      <div className="artboard phone-3 bg-white mt-8 rounded-xl ml-40 ">
        <div className="ml-10">
          <div className="flex flex-col gap-3 ">
            <h className="mt-5 text-2xl font-black">Records</h>
            <button className="btn bg-cyan-400 w-full max-w-xs">
              <MdAdd />
              Add
            </button>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 ml-10">
          <h1 className="mt-5 text-2xl font-bold">Types</h1>
          <div className="flex gap-4">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-xs"
            />
            <h2 className="">All</h2>
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-xs"
            />
            <h2 className="">Income</h2>
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-xs"
            />
            <h2 className="">Expence</h2>
          </div>
        </div>
        <div className="">
          <div className="mt-5 text-2xl font-bold flex flex-col justify-between">
            <div className="flex justify-around mb-5">
              <h className="">Category</h>
              <button className="text-slate-200">Clear</button>
            </div>
          </div>
          <div className="">
            <div className="flex justify-around">
              <TiEye />
              <h>Food&Drinks</h>
              <IoMdArrowDropright />
            </div>
            <div className="flex gap-5 ml-10 mt-3"></div>
            <div className="flex justify-around">
              <TiEye />
              <h>Food&Drinks</h>
              <IoMdArrowDropright />
            </div>
            <div className="flex gap-5 ml-10 mt-3">
              <CiSquarePlus className="bg-blue-300 rounded-xl mt-1" />
              <h>Add Category</h>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
