import React from "react";
import { array2 } from "@/components/Data";

const DataChange = () => {
  return (
    <div>
      {array2.map((el) => {
        <div className="flex justify-between bg-slate-200 w-11/12 rounded-xl gap-10 my-3 ml-10 p-1">
          <div className="flex gap-5">
            <input type="checkbox" checked="" className="chechbox ml-3" />
            <div
              className={`w-10 h-10 rounded-full flex mt-1 justify-center items-center bg-${el.color}`}
            >
              {el.icon}
            </div>
            <div className="flex flex-col">
              <h className="">{el.category}</h>
              <div className="font-thin text-xs">{el.time}</div>
            </div>
          </div>
          <div className="text-teal-500 font-bold mr-5 flex items-center">
            {el.price}₮{" "}
          </div>
        </div>;
      })}
    </div>
  );
};

export default DataChange;
