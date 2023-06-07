import React from "react";

const Stuff = () => {
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth() + 1; // Months are zero-based, so we add 1
  const currentYear = today.getFullYear();
  const formattedDate = `${currentMonth}/${currentDate}/${currentYear}`;
  return (
    <div className="container mx-auto">
      <h1 className="text-center my-4 text-xl font-semibold">Stuff</h1>
      <table class="min-w-full border border-gray-200 ">
          <thead>
            <tr>
              <th class="py-2 px-4 bg-gray-100 border-b">Name</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Email</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Role</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Category</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Status</th>
              <th class="py-2 px-4 bg-gray-100 border-b">Registered date</th>
            </tr>
          </thead>
          <tbody>
          <tr className="text-center cursor-pointer">
                <td class="py-2 px-4 border-b">Alexa</td>
                <td class="py-2 px-4 border-b">alexa@gmail.com</td>
                <td class="py-2 px-4 border-b">Reporter</td>
                <td class="py-2 px-4 border-b">sports,politics</td>
                <td class="py-2 px-4 border-b">pending</td>
                <td class="py-2 px-4 border-b">{formattedDate}
                </td>
              </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Stuff;
