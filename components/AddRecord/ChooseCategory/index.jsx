import React from "react";

const ChooseCategory = () => {
  const handleChange = (e) => {
    e.target.value;
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-slate-50 p-1 mt-3 w-full max-w-xs lg:max-w-[280px] rounded-xl 2xl:max-w-sm">
          <button className="btn btn-sm hover:btn-primary w-1/2">
            Expence
          </button>
          <button className="btn btn-sm hover:btn-primary w-1/2">Income</button>
        </div>
        <div className="">
          <button className="btn btn-lg flex justify-start max-w-xs mt-3">
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
        <button className="btn btn-lg flex justify-start mt-1">
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
      <div className="flex gap-1 mt-3">
        <select className="select select-bordered select-xs lg:w-[140px]">
          <option disabled selected>
            Tiny
          </option>
          <option>Tiny Apple</option>
          <option>Tiny Orange</option>
          <option>Tiny Tomato</option>
        </select>
        <select className="select select-bordered select-xs lg:w-[140px]  max-w-xs">
          <option disabled selected>
            Tiny
          </option>
          <option>Tiny Apple</option>
          <option>Tiny Orange</option>
          <option>Tiny Tomato</option>
        </select>
      </div>
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
    </div>
  );
};

export default ChooseCategory;
