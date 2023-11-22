import React from "react";
import RecordRange from "./RecordRange";

import BarChart from "../Barchart";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "../DoughnutChart";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

const ExpenseCard = () => {
  return (
    <>
      <div className="flex justify-center  flex-col items-center">
        <div className="flex justify-center  items-center w-full">
          <BarChart />

          <DoughnutChart />
        </div>
        <div className="w-full">
          <RecordRange />
        </div>
      </div>
    </>
  );
};

export default ExpenseCard;
