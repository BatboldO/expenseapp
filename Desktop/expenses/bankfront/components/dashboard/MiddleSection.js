import React from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const MiddleSection = () => {
  const data1 = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "My First Dataset",
        backgroundColor: "#85CC16",
        data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
      },
      {
        label: "My Second Dataset",
        backgroundColor: "#F97316",
        data: [2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
      },
    ],
  };

  const data2 = {
    datasets: [
      {
        data: [5000000, 5000000, 5000000, 5000000, 5000000],

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: ["Bill", "Food ", "Shopping", "Insurance", "Clothing"],
  };

  const options1 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="w-full grid grid-cols-2 my-10 gap-9">
      <div className="card bg-white">
        <Bar data={data1} options={options1} />
      </div>
      <div className="h-96 w-full  card bg-white flex">
        <div className="h-96 w-96">
          <Doughnut options={options2} data={data2} />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
