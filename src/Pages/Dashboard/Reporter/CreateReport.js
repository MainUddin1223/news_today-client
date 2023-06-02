import React, { useState } from "react";
import { useRequest } from "../../../utilis/apiRequest";

const CreateReport = () => {
    const [handleNews,]= useRequest()
  const [reportForm, setReportForm] = useState({
    photos: [
      "https://www.motherjones.com/wp-content/uploads/2023/05/Coronation05062023.jpg",
    ],
    category: "politics",
  });

  const handleCreateReport = async(e)=>{
    e.preventDefault();
    const path = 'news/post-news';
    await handleNews({
        body:reportForm,
        path,
        method:'POST'    
      })
  }

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold text-center">Report a News</h1>
      <div className="w-3/4 bg-gray-300 mx-auto mt-4 p-4">
        <form class="w-full " onSubmit={handleCreateReport}>
          <div class="">
            <div class="w-full  px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Title *
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={(e) => {
                  setReportForm((prev) => ({
                    ...reportForm,
                    title: e.target.value,
                  }));
                }}
              />
            </div>
            <div class="w-full  px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Subtitle *
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={(e) => {
                  setReportForm((prev) => ({
                    ...reportForm,
                    subtitle: [e.target.value],
                  }));
                }}
              />
            </div>
            <div className="flex gap-4 p-4 text-xl font-semibold">
              <p>Category :</p>
              <p className="">Politics</p>
            </div>
            <div class="w-full  px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Description *
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-full"
                onChange={(e) => {
                  setReportForm((prev) => ({
                    ...reportForm,
                    description: e.target.value,
                  }));
                }}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-800 text-white w-48 py-2 text-xl font-semibold block mt-4 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateReport;
