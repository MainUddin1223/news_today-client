import React, { useEffect, useState } from "react";
import { useRequest } from "../../../utilis/apiRequest";
import DoughnutChart from "../Chart/Doughnut";
import HistoryChartReport from "../Chart/HistoryChart";
import DailyReportsChart from "../Chart/ReportsBarChart";

const AdminStatics = ()=>{
    const [getStatics] = useRequest();
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

      const handleStatics = async()=>{
     try {
        const statics = await getStatics({
            path: "/admin/statics",
            method: "GET",
          });
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
        console.log(error)
     }
      }

      useEffect(()=>{
        handleStatics()
      },[])

    return (
        <div>
            <h1 className="text-2xl text-center font-medium my-4">Overall performance</h1>
            <hr className="border-1  border-gray-300 m-2 md:m-4 lg:m-8"/>
        <div className="grid grid-col-1 md:grid-cols-2 ">
        <div className=" ">
            
            <DailyReportsChart dailyStatics={dailyStatics}/>
        
        </div>
        <div >
            <DoughnutChart totalStatics={totalStatics}/>
        </div>
        <div >
            <HistoryChartReport totalStatics={totalStatics}/>
        </div>
        </div>
        </div>
    )
}
export default AdminStatics