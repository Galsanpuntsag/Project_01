import React from "react";

import PayNote from "./PayNote";
import ChooseCategory from "./Expence";

const AddForm = () => {
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div>
          <div className="modal-action">
            <div className="flex flex-col bg-slate-100 p-5 rounded-xl">
              <div className="">
                <div className="flex justify-betweennpm">
                  <h3 className="font-bold text-xl">Add Records</h3>
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-300">
                      ✕
                    </button>
                  </form>
                </div>
                <div className="border-b-2 border-rey-700 "></div>
              </div>
              <div className="grid grid-rows-2 lg:flex  ">
                <ChooseCategory />
                <PayNote />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddForm;
