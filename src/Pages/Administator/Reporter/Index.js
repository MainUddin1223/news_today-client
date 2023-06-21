import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useAppContext } from "../../../contextProvider/useAppcontext";
import Logout from "../../Auth/Logout";

const ReporterDashboard = () => {
  const { authData } = useAppContext();
  const { email, name, userinfo } = authData;
  const [geetMessage,setGreetMessage] = useState('')
  useEffect(()=>{
    const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour < 12) {
    setGreetMessage ("Good Morning");
  } else if (currentHour < 18) {
    setGreetMessage("Good Afternoon");
  } else {
    setGreetMessage ("Good Evening");
  }
  },[])



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
          <Link to='/reporter/statics' className="bg-gray-300 mx-2 py-1 rounded"> My Statics</Link>
          <Link to='/reporter/reports' className="bg-gray-300 mx-2 py-1 rounded">Reports</Link>
          <Link to="/reporter/create-report" className="bg-gray-300 mx-2 py-1 rounded">Post a Report</Link>
          <Link to="/reporter/profile" className="bg-gray-300 mx-2 py-1 rounded">Profile</Link>
          <Logout/>
         </div>
      </div>
      <div className="flex-1 overflow-auto ">

        <div className=" shadow-md h-48 shadow-white-500/40 bg-red-800 text-white">
          <div className="p-4">
            <h1>Reporter Dashbpard</h1>
          <h1 className="text-2xl font-semibold ">
            {geetMessage} <span className="uppercase"> {name.firstName} {name?.lastName}</span>
          </h1>
          <h2 className="text-xl font-semibold">Designation: <span className="uppercase">{userinfo.role}</span> </h2>
          <h2 className="text-xl font-semibold">Category: <span className="uppercase">{userinfo.role}</span> </h2>
          <h2 className="text-xl font-semibold">Sub-Category: <span className="uppercase">{userinfo.role}</span> </h2>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default ReporterDashboard;
