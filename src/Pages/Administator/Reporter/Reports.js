import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useRequest } from "../../../utilis/apiRequest";

const MyReportsList = () => {
  const [getAllNews] = useRequest();
  const [reportsList, setReportsList] = useState([]);
  
  useEffect(() => {
    fatchReports()
  
  }, []);
  const fatchReports = async()=>{
    try {
     const reports = await getAllNews({
        path: "reporter/reports",
        method: "GET",
      })
      setReportsList(reports?.result
        )
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="lg:w-3/4 text-center mx-auto mt-8">
      {reportsList && reportsList.length ? (
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b">News Title</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Status</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Created At</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Editor Review</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Edit</th>
            </tr>
          </thead>
          <tbody>
            {reportsList.map((report, index) => (
              <tr>
                <td className="py-2 px-4 border-b">{report.title}</td>
                <td className="py-2 px-4 border-b">{report.status}</td>
                <td className="py-2 px-4 border-b">{report.createdAt}</td>
                <td className="py-2 px-4 border-b">Not reviewed yet</td>
                <td className="py-2 px-4 border-b">
                  <BiEdit />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};
export default MyReportsList;
