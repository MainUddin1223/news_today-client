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
const ReportsChart = ({ chartData }) => {
  const data = {
    labels:['Total','Approved','pending','Rejected'],
    datasets:[
      {
        label:'',
        data:[3,6,9,48],
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
export default ReportsChart;
