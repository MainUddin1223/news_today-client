import React from "react";
import { CgProfile } from "react-icons/cg";
import { FcStatistics } from "react-icons/fc";
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiDocumentReport } from "react-icons/hi";
import { SiCkeditor4 } from "react-icons/si";
import { TbReport } from "react-icons/tb";
import './adminStyle/AdminDashboard.css';

import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Logout from "../../Auth/Logout";

const AdminDashboard = () => {
  const location = useLocation()
const {pathname} = location;

  return (
    <div className={`flex `}>
      <div className={`bg-red-800 lg:w-1/6 h-screen shadow-lg text-white shadow-gray-500/40 sticky z-50 top-0`}>
        <img
          src={logo}
          alt="logo"
          className="w-24 mx-auto mt-8 bg-gray-300 rounded"
        />
        <hr className="border-1  border-gray-300 m-2" />
        <div className="flex flex-col ">
          <Link
            to="/admin/statics"
            className={` mx-2 py-2 hover:bg-red-700 rounded flex gap-4  px-4 lg:px-8 text-xl font-semibold ${pathname==='/admin/statics' ?'bg-red-700':''}`}
          >
            <FcStatistics className="text-3xl" />
            <span>My Statics</span>
          </Link>
          <Link
            to="/admin/reports"
            className={` mx-2 py-2 hover:bg-red-700 rounded flex gap-4  px-4 lg:px-8 text-xl font-semibold ${pathname==='/admin/reports'?'bg-red-700':''}`}
          >
            <HiDocumentReport className="text-3xl" />
            <span>Reports</span>
          </Link>
          <Link to="/admin/editors"  className={` mx-2 py-2 hover:bg-red-700 rounded flex gap-4  px-4 lg:px-8 text-xl font-semibold ${pathname==='/admin/editors'?'bg-red-700':''}`}>
            <SiCkeditor4 className="text-3xl"/>
            <span>Editors</span>
          </Link>
          <Link to="/admin/reporters"   className={` mx-2 py-2 hover:bg-red-700 rounded flex gap-4  px-4 lg:px-8 text-xl font-semibold ${pathname==='/admin/reporters'?'bg-red-700':''}`}>
            <TbReport className="text-3xl"/>
            <span>Reporters</span>
          </Link>
          <Link to="/admin/profile"   className={` mx-2 py-2 hover:bg-red-700 rounded flex gap-4  px-4 lg:px-8 text-xl font-semibold ${pathname==='/admin/profile'?'bg-red-700':''}`}>
            <CgProfile className="text-3xl"/>
            <span>Profile</span>
          </Link>
          <Logout />
        </div>
      </div>
      <div className="flex-1">
        <div className="  bg-red-800 sticky top-0">
          <div className="p-2 absolute top-3 rounded left-10 bg-gray-300 cursor-pointer" >
          <GiHamburgerMenu className=" text-2xl" />
          </div>
          <h1 className="text-center text-2xl font-semibold py-4 text-white">
            Admin Dashboard
          </h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default AdminDashboard;
