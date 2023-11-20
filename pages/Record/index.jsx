import React from "react";
import Records from "@/components/Records";
import CategoryList from "@/components/CategoryList";
const Record = () => {
  return (
    <div className="flex">
      <Records />
      <CategoryList />
    </div>
  );
};

export default Record;
