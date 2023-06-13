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
const DoughnutChart = ({ chartData }) => {
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
        hoverOffset: 2,
        borderWidth:0
      }
    ]
  }
  return (
    <div className=' p-4 bg-gray-200 m-4 rounded shadow-lg shadow-gray-500/40'>
      <Doughnut data={data} options={{
          plugins: {
            legend: {
              display: false
            }
          }
        }} className='mx-auto'/>
    </div>
  );
};
export default DoughnutChart;
