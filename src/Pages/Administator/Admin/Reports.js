import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { useRequest } from "../../../utilis/apiRequest";

const Reports = () => {
  const [getAllNews] = useRequest();
  const [reportsList, setReportsList] = useState([]);

  useEffect(() => {
    fatchReports();
  }, []);
  const fatchReports = async () => {
    try {
      const reports = await getAllNews({
        path: "/admin/reports",
        method: "GET",
      });
      setReportsList(reports);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(reportsList);
  return (
    <div className="container mx-auto relative">
      <h1 className="text-2xl text-center font-medium my-4">News Reports</h1>
      <div className="absolute  top-0 right-10">
        <ImSearch className="absolute top-4 left-2" />
        <input
          className="appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-72 pl-8"
          id="grid-first-name"
          type="text"
          placeholder="Search"
        />
      </div>
      <hr className="border-1  border-gray-300 m-2 md:m-4 lg:m-8" />

      <div className="relative overflow-x-scroll shadow-md sm:rounded-lg mx-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Reporter
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Reviewer
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
          { reportsList?.length? reportsList.map(news=>(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-medium text-gray-900">
              {news.title}
            </td>
            <td className="px-6 py-4">
              {news.reporterId}
            </td>
            <td className="px-6 py-4">
              {news.category}
            </td>
            <td className="px-6 py-4">
             {news.status}
            </td>
            <td className="px-6 py-4">{
              news?.createdAt
}</td>
            <td className="px-6 py-4">{
              news?.reviewerId
}</td>
            <td className="px-6 py-4 text-right">
              <FiEdit className="text-xl" />
            </td>
          </tr>
          )):'No reports found'}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
