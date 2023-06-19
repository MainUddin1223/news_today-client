import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
const DailyReportsChart = ({ dailyStatics }) => {
  const {totalReports=0,approved=0,pending=0,rejected=0}=dailyStatics
  const data = {
    labels:['Total','Approved','pending','Rejected'],
    datasets:[
      {
        label:'',
        data:[totalReports,approved,pending,rejected],
        backgroundColor: [
          'blue',
          'green',
          'rgb(255, 205, 86)',
          'red'
        ],
        borderColor:'black',
        borderWidth:1
      }
    ]
  }
  return (
    <div className='p-4  bg-gray-200 m-4 rounded shadow-lg shadow-gray-500/40'>
      <h2 className='text-lg font-semibold text-gray-800 text-center'>Daily Statics</h2>
      <hr className="border-1  border-gray-300 m-2"/>
      <Bar data={data}  options={{
          plugins: {
            legend: {
              display: false
            }
          }
        }}/>
    </div>
  );
};
export default DailyReportsChart;
