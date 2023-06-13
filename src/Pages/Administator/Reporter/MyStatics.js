import React from "react";
import DoughnutChart from "../Chart/Doughnut";
import HistoryChartReport from "../Chart/HistoryChart";
import ReportsChart from "../Chart/ReportsBarChart";

const MyStatics = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-200 w-3/4 mx-auto rounded-md my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40"> 
        <h2 className="">Total Reports</h2>
        <p>43</p>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto rounded-md my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40"> 
        <h2 className="">Approved</h2>
        <p>43</p>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto rounded-md my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40"> 
        <h2 className="">Pending</h2>
        <p>43</p>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto rounded-md my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40"> 
        <h2 className="">Rejected</h2>
        <p>43</p>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <HistoryChartReport/>
        <ReportsChart/>
      <DoughnutChart/>
        </div>
    </div>
  );
};

export default MyStatics;
