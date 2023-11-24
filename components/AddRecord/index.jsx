import React from "react";
import { MdAdd } from "react-icons/md";

import AddForm from "./ctgryForm/Modal";
const AddRecords = () => {
  return (
    <div>
      <button
        className="btn bg-cyan-400 w-full max-w-xs"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <MdAdd />
        Add
      </button>
      <AddForm />
    </div>
  );
};

export default AddRecords;
