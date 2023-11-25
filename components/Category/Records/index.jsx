import React from "react";
import CategoryList from "./CategoryList";

import AmountRange from "./AmountRange";
import ExpenceList from "./ExpenceList/RightList";

const Records = () => {
  return (
    <div div className="flex flex-col md:flex-row w-full mt-10 justify-center">
      <div className="ml-10">
        <CategoryList />
      </div>
      <div className="w-10/12 flex justify-center">
        <ExpenceList />
      </div>
    </div>
  );
};

export default Records;
