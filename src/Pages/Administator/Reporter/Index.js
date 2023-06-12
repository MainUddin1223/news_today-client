import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppContext } from "../../../contextProvider/useAppcontext";

const ReporterDashboard = ()=>{
  const {authData} = useAppContext();
  const {email,name,userinfo} = authData;
return (
    <div>
       <nav className="flex justify-center space-x-4 font-semibold bg-red-800">
        <Link to="/dashboard/reports" className="text-red-100 py-1 text-2xl">
          Reports
        </Link>
        <Link to="/create-report" className="text-red-100 py-1 text-2xl">
          Create a Report
        </Link>
        <Link to="/dashboard/profile" className="text-red-100 py-1 text-2xl">
          Profile
        </Link>
        <Link to="/sports" className="text-red-100 py-1 text-2xl">
          Sports
        </Link>
      </nav>

      <div>
        <h1>Welcome{name.firstName} {name.firstName}</h1>
        
      </div>
      <Outlet />
    </div>
)

}
export default ReporterDashboard