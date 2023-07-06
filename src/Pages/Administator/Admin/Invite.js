import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImSearch } from "react-icons/im";
import { useAppContext } from "../../../contextProvider/useAppcontext";
import { useRequest } from "../../../utilis/apiRequest";

const Reporters = () => {
  const [allReporters] = useRequest();
  const [reporters, setReporters] = useState([]);
  const {isInviteModal,setIsInviteModal} = useAppContext()

  useEffect(() => {
    fatchReporters();
  }, []);
  const fatchReporters = async () => {
    try {
      const reporters = await allReporters({
        path: "admin/reporters",
        method: "GET",
      });
      setReporters(reporters);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInvite = (email) => {
      setIsInviteModal(true)
      console.log(email)
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl text-center font-medium my-4">
        Invite for a role
      </h1>
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
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {reporters?.length
              ? reporters.map((Reporter) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 w-72 font-medium text-gray-900 dark:text-white"
                    >
                      test@gmail.com
                    </th>
                    <td className="px-6 py-4">User</td>
                    <td className="px-6 py-4 text-right">
                      <FiEdit className="text-xl" onClick={()=>{handleInvite('test@gmail.com')}} />
                    </td>
                  </tr>
                ))
              : "No reports found"}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Reporters;
