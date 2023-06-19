import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
)
const DoughnutChart = ({ totalStatics }) => {
  const {totalReports=0,approved=0,pending=0,rejected=0}=totalStatics
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
        hoverOffset: 2,
        borderWidth:0
      }
    ]
  }
  return (
    <div className=' p-4 bg-gray-200 m-4 rounded shadow-lg shadow-gray-500/40'>
     <h2 className='text-lg font-semibold text-gray-800 text-center'>Total Statics</h2>
     <hr className="border-1  border-gray-300 m-2"/>
      <Doughnut data={data} options={{
          plugins: {
          }
        }} className='mx-auto'/>
    </div>
  );
};
export default DoughnutChart;
