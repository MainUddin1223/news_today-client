import React from "react";

const Reports = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center my-4 text-xl font-semibold">Reports</h1>
      <table className="min-w-full border border-gray-200 ">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b">News Title</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Status</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Created At</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Editor Review</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Reviewer</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Reporter</th>
            </tr>
          </thead>
          <tbody>
          <tr className="text-center cursor-pointer">
                <td className="py-2 px-4 border-b">This is Report title</td>
                <td className="py-2 px-4 border-b">Report status</td>
                <td className="py-2 px-4 border-b">Created at</td>
                <td className="py-2 px-4 border-b">Not reviewed yet</td>
                <td className="py-2 px-4 border-b">I
                </td>
              </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Reports;
