import { Bar } from "react-chartjs-2";

const HistoryChartReport = ({ chartData }) => {
  const data = {
    labels: ['2023-06-01', '2023-06-02', '2023-06-03'], 
    datasets: [
      {
        label: 'Total',
        data: [3, 6, 9], 
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 0,
      },
      {
        label: 'Approved',
        data: [3, 6, 9], 
        backgroundColor: 'blue',
        borderColor: 'Green',
        borderWidth: 0,
      },
      {
        label: 'Pending',
        data: [8, 6, 6], 
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 0,
      },
      {
        label: 'Rejected',
        data: [9, 9, 5],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-200 m-4 md:w-3/4 lg:w-2/4 mx-auto">
      <h2 className='text-lg font-semibold text-gray-800 text-center'>History</h2>
      <hr className="border-1  border-gray-300 m-2"/>
      <Bar
        data={data}
        options={{
          indexAxis: 'x', 
          plugins: {
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};

export default HistoryChartReport;



