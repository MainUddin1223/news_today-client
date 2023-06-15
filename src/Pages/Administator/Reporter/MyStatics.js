import React, { useEffect, useState } from "react";
import { FcAcceptDatabase } from "react-icons/fc";
import { MdPendingActions } from "react-icons/md";
import { TbNotesOff, TbReport } from "react-icons/tb";
import { useRequest } from "../../../utilis/apiRequest";
import DoughnutChart from "../Chart/Doughnut";
import HistoryChartReport from "../Chart/HistoryChart";
import DailyReportsChart from "../Chart/ReportsBarChart";

const MyStatics = () => {
  const [getReporterStatics] = useRequest();
  const [getReporterHistory] = useRequest();
  const [totalStatics, setTotalStatics] = useState({
    pending: 0,
    rejected: 0,
    approved: 0,
    totalReports: 0,
  });
  const [dailyStatics, setDailyStatics] = useState({
    pending: 0,
    rejected: 0,
    approved: 0,
    totalReports: 0,
  });
  const handleReporterStatics = async () => {
    try {
      const statics = await getReporterStatics({
        path: "reporter/statics",
        method: "GET",
      });
      const history = await getReporterHistory({
        path: "reporter/history",
        method: "GET",
      });
      console.log(history);
      const grossStatics = statics.totalStatics;
      setTotalStatics((prev) => ({
        ...prev,
        totalReports: grossStatics.totalCount,
        approved: grossStatics?.counts?.approved,
        pending: grossStatics?.counts?.pending,
        rejected: grossStatics?.counts?.rejected,
      }));
      const todayStatics = statics.todayStatics;
      setDailyStatics((prev) => ({
        ...prev,
        totalReports: todayStatics.totalCount | 0,
        approved: todayStatics?.counts?.approved | 0,
        pending: todayStatics?.counts?.pending | 0,
        rejected: todayStatics?.counts?.rejected | 0,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleReporterStatics();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-200 w-3/4 mx-auto rounded-sm text-blue-800 my-4 text-lg font-semibold p-2  shadow-lg shadow-gray-500/40">
          <h2 className="text-center">Total Reports</h2>
          <span className="flex justify-center gap-2">
            <TbReport className="text-2xl" />
            <p>{totalStatics.totalReports}</p>
          </span>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto rounded-sm text-green-800 my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40">
          <h2 className="">Approved</h2>
          <span className="flex justify-center gap-2">
            <FcAcceptDatabase className="text-2xl" />
            <p>{totalStatics.approved}</p>
          </span>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto text-yellow-800 rounded-md my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40">
          <h2 className="">Pending</h2>
          <span className="flex justify-center gap-2">
            <MdPendingActions className="text-2xl" />
            <p>{totalStatics.pending}</p>
          </span>
        </div>
        <div className="bg-gray-200 w-3/4 mx-auto text-red-500 rounded-md my-4 text-lg font-semibold p-2 text-center shadow-lg shadow-gray-500/40">
          <h2 className="">Rejected</h2>
          <span className="flex justify-center gap-2">
            <TbNotesOff className="text-2xl" />
            <p>{totalStatics.rejected}</p>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <HistoryChartReport />
        <DailyReportsChart dailyStatics={dailyStatics}/>
        <DoughnutChart totalStatics={totalStatics}/>
      </div>
    </div>
  );
};

export default MyStatics;
