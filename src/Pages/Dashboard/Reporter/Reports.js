import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useRequest } from "../../../utilis/apiRequest";

const MyReportsList = () => {
  const [getAllNews] = useRequest();
  const [reportsList, setReportsList] = useState([]);
  
  useEffect(() => {
    getAllNews({
      path: "news/my-all-reports",
      method: "GET",
    }).then((data) => {
      setReportsList(data?.result);
    });
  }, []);

  return (
    <div class="lg:w-3/4 text-center mx-auto mt-8">
      {reportsList.length ? (
        <table class="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th class="py-2 px-4 bg-gray-100 border-b">News Title</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Status</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Created At</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Editor Review</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Edit</th>
            </tr>
          </thead>
          <tbody>
            {reportsList.map((report, index) => (
              <tr>
                <td class="py-2 px-4 border-b">{report.title}</td>
                <td class="py-2 px-4 border-b">{report.status}</td>
                <td class="py-2 px-4 border-b">{report.createdAt}</td>
                <td class="py-2 px-4 border-b">Not reviewed yet</td>
                <td class="py-2 px-4 border-b">
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
