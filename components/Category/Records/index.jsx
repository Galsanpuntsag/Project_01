import React from "react";
import CategoryList from "./CategoryList";

import AmountRange from "./AmountRange";
import ExpenceList from "./ExpenceList";

const Records = () => {
  return (
    <div div className="flex w-full mt-10">
      <div className="">
        <CategoryList />
        <AmountRange />
      </div>
      <div className="flex w-full">
        <ExpenceList />
      </div>
    </div>
  );
};

export default Records;
