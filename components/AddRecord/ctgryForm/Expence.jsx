import React from "react";
import PayNote from "./PayNote";
import Income from "./Income";

const Expence = (showExpense, setShowExpence, setShowIncome, showIncome) => {
  const handleChange = (e) => {};

  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-slate-50 2xl:mt-5 p-1 mt-3 w-full max-w-xs lg:max-w-[280px] rounded-xl 2xl:max-w-sm">
          <button className="btn btn-sm btn-primary w-1/2">Expence</button>
          <button className="btn btn-sm hover:btn-primary w-1/2">Income</button>
        </div>
        <div className="">
          <button className="btn btn-lg flex justify-start max-w-xs mt-4">
            <h className="ml-3 mt-1 text-sm">Amount</h>
            <input
              type="text"
              placeholder="₮ 000.00"
              className="input input-ghost input-xs w-full max-w-sm"
            />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h>Category</h>
        <button className="btn btn-lg flex justify-start mt-3">
          <select className="select select-bordered w-full w-max-[400px]">
            <option disabled selected>
              Choose
            </option>
            <option>Food&Drinks</option>
            <option>Shopping</option>
            <option>Housing</option>
            <option>Transportation</option>
            <option>Vechile</option>
            <option>Life&Entertiament</option>
            <option>Income</option>
            <option>Communication, PC</option>
            <option>Others</option>
          </select>
        </button>
      </div>
      <div className="flex gap-1 mt-3"> </div>
      <div className="flex gap-1 max-w-xs">
        <div className="">
          <label className="label">
            <span className="text-base label-text">date</span>
          </label>
          <input
            name="birthDate"
            type="date"
            placeholder="төрсөн он сараа оруулна уу"
            className="  lg:w-[140px] 2xl:w-full input input-bordered input-primary"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label className="label">
            <span className="text-base label-text">date</span>
          </label>
          <input
            name="birthDate"
            type="date"
            placeholder="төрсөн он сараа оруулна уу"
            className=" lg:w-[140px] 2xl:w-full input input-bordered input-primary"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-3">
        <button className="btn bg-cyan-400 w-full lg:max-w-[283px] 2xl:max-w-xs ">
          Add
        </button>
      </div>
      <PayNote />
    </div>
  );
};

export default Expence;
