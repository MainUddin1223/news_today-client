import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Logout from "../../Register/Logout";

const AdminDashboard = () => {
  return (
<div className="flex">
      <div className="bg-red-800 lg:w-1/6 h-screen shadow-lg shadow-gray-500/40 sticky z-50 top-0 ">
        <img
          src={logo}
          alt="logo"
          className="w-24 mx-auto mt-8 bg-gray-300 rounded"
        />
         <hr className="border-1  border-gray-300 m-2"/>
         <div className="flex flex-col text-center gap-4 font-medium">
          <Link to='/admin/statics' className="bg-gray-300 mx-2 py-1 rounded"> My Statics</Link>
          <Link to='/admin/reports' className="bg-gray-300 mx-2 py-1 rounded">Reports</Link>
          <Link to="/admin/editors" className="bg-gray-300 mx-2 py-1 rounded">Editors</Link>
          <Link to="/admin/reporters" className="bg-gray-300 mx-2 py-1 rounded">Reporters</Link>
          <Link to="/admin/profile" className="bg-gray-300 mx-2 py-1 rounded">Profile</Link>
          <Logout/>
         </div>
      </div>
      <div className="flex-1">

        <div className="  bg-red-800 sticky top-0">
        <h1 className="text-center text-2xl font-semibold py-4 text-white">Admin Dashboard</h1>
 
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default AdminDashboard;
