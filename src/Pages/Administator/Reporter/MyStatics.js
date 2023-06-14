import React from "react";
import { FcAcceptDatabase } from 'react-icons/fc';
import { MdPendingActions } from 'react-icons/md';
import { TbNotesOff, TbReport } from 'react-icons/tb';
import DoughnutChart from "../Chart/Doughnut";
import HistoryChartReport from "../Chart/HistoryChart";
import ReportsChart from "../Chart/ReportsBarChart";

const MyStatics = () => {

  return (
    <div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div  className="bg-gray-200 w-3/4 mx-auto rounded-sm text-blue-800 my-4 text-lg font-semibold p-2  shadow-lg shadow-gray-500/40"> 
        <h2 className="text-center">Total Reports</h2>
      <span className="flex justify-center gap-2">
        <TbReport className="text-2xl"/>
        <p>30</p>
      </span>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto rounded-sm text-green-800 my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40"> 
        <h2 className="">Approved</h2>
        <span className="flex justify-center gap-2">
          <FcAcceptDatabase className="text-2xl"/>
          <p >45</p>
        </span>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto text-yellow-800 rounded-md my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40"> 
        <h2 className="">Pending</h2>
        <span className="flex justify-center gap-2">
        <MdPendingActions className="text-2xl"/>
        <p >43</p>
        </span>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto text-red-500 rounded-md my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40"> 
        <h2 className="">Rejected</h2>
        <span className="flex justify-center gap-2">
        <TbNotesOff className="text-2xl"/>
        <p>43</p>
        </span>
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
