import React, { useState } from "react";
import { useAppContext } from "../../../contextProvider/useAppcontext";
import UploadImg from "../../../utilis/UploadImg";
import { useRequest } from "../../../utilis/apiRequest";

const CreateReport = () => {
  const { authData } = useAppContext();
  const { email, name, userinfo } = authData;
  const [handleNews] = useRequest();
  const [reportForm, setReportForm] = useState({
  });

  const handleCreateReport = async (e) => {
    e.preventDefault();
    const path = "reporter/report";
    await handleNews({
      body: reportForm,
      path,
      method: "POST",
    });
  };

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold text-center">Compose a Report</h1>
      <div className="w-3/4 bg-gray-300 mx-auto mt-4 p-4">
        <form className="w-full " onSubmit={handleCreateReport}>
          <div className="">
            <div className="">
            <div className=" px-3 mb-6 md:mb-0 w-1/2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Reporter
              </label>
              <input
                className="appearance-none block uppercase bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                readOnly
                value={`${name.firstName} ${name.firstName}`}
              />
            </div>
            <div className=" px-3 mb-6 md:mb-0 w-1/2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Category
              </label>
              <input
                className="appearance-none uppercase block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                readOnly
                value={`${userinfo?.role}`}
              />
            </div>
            <div className=" px-3 mb-6 md:mb-0 w-1/2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Status
              </label>
              <input
                className="appearance-none uppercase block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                readOnly
                value={`Pending`}
              />
            </div>
            </div>
            <UploadImg setReportForm={setReportForm} reportForm={reportForm} />
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Title *
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Subtitle *
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={(e) => {
                  setReportForm((prev) => ({
                    ...reportForm,
                    subtitle: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
