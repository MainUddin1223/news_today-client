import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { useRequest } from "../../../utilis/apiRequest";

const EditorList = ()=>{
    const [allEditors] = useRequest();
    const [editorList, setEditorList] = useState([]);
  
    useEffect(() => {
      fetchEditors();
    }, []);
    const fetchEditors = async () => {
      try {
        const reports = await allEditors({
          path: "admin/reporters",
          method: "GET",
        });
        setEditorList(reports);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(editorList)
    return (
      <div className="container mx-auto relative">
      <h1 className="text-2xl text-center font-medium my-4">Reporters</h1>
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
            {editorList?.length
              ? editorList.map((Reporter) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                   <th scope="row" class="px-6 py-4 w-72 font-medium text-gray-900 dark:text-white">
                    Title
                </th>
                    <td className="px-6 py-4">Tite</td>
                    <td className="px-6 py-4">Title</td>
                    <td className="px-6 py-4">Title</td>
                    <td className="px-6 py-4">Title</td>
                    <td className="px-6 py-4">Title</td>
                    <td className="px-6 py-4 text-right">
                      <FiEdit className="text-xl" />
                    </td>
                  </tr>
                ))
              : "No reports found"}
          </tbody>
        </table>
      </div>
    </div>
    )
}
export default EditorList