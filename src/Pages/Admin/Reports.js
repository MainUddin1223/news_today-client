import React from "react";

const Reports = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center my-4 text-xl font-semibold">Reports</h1>
      <table class="min-w-full border border-gray-200 ">
          <thead>
            <tr>
              <th class="py-2 px-4 bg-gray-100 border-b">News Title</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Status</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Created At</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Editor Review</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Reviewer</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Reporter</th>
            </tr>
          </thead>
          <tbody>
          <tr className="text-center cursor-pointer">
                <td class="py-2 px-4 border-b">This is Report title</td>
                <td class="py-2 px-4 border-b">Report status</td>
                <td class="py-2 px-4 border-b">Created at</td>
                <td class="py-2 px-4 border-b">Not reviewed yet</td>
                <td class="py-2 px-4 border-b">I
                </td>
              </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Reports;
