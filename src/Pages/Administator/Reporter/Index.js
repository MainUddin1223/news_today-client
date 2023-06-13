import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useAppContext } from "../../../contextProvider/useAppcontext";

const ReporterDashboard = () => {
  const { authData } = useAppContext();
  const { email, name, userinfo } = authData;
  console.log(userinfo)
  return (
    <div className="flex">
      <div className="bg-red-800 lg:w-1/6 h-screen shadow-lg shadow-gray-500/40  ">
        <img
          src={logo}
          alt="logo"
          className="w-24 mx-auto mt-8 bg-gray-300 rounded"
        />
         <hr className="border-1  border-gray-300 m-2"/>
         <div className="flex flex-col text-center gap-4 font-medium">
          <Link to='/reporter/statics' className="bg-gray-300 mx-2 py-1 rounded"> My Statics</Link>
          <Link to='/reporter/reports' className="bg-gray-300 mx-2 py-1 rounded">Reports</Link>
          <Link to="/reporter/create-report" className="bg-gray-300 mx-2 py-1 rounded">Post a Report</Link>
          <Link to="/reporter/profile" className="bg-gray-300 mx-2 py-1 rounded">Profile</Link>
         </div>
      </div>
      <div className="flex-1 overflow-auto ">
        {/* <nav className="flex justify-center space-x-4 font-semibold bg-red-800">
          <Link to="/reporter/reports" className="text-red-100 py-1 text-2xl">
            Reports
          </Link>
          <Link to="/create-report" className="text-red-100 py-1 text-2xl">
            Create a Report
          </Link>
          <Link to="reporter/profile" className="text-red-100 py-1 text-2xl">
            Profile
          </Link>
          <Link to="reporter/sports" className="text-red-100 py-1 text-2xl">
            Sports
          </Link>
        </nav> */}

        <div className="h-48 shadow-md shadow-white-500/40 ">
          <div className="text-center">
          <h1 className="text-2xl font-semibold">
            Welcome {name.firstName} {name.firstName}
          </h1>
          <h2 className="text-xl font-semibold">Designation: <span className="uppercase">{userinfo.role}</span> </h2>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default ReporterDashboard;
