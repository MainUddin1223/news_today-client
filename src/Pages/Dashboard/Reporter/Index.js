import React from "react";
import { Link, Outlet } from "react-router-dom";

const ReporterDashboard = ()=>{
return (
    <div>
       <nav className="flex justify-center space-x-4 font-semibold bg-red-800">
        <Link to="/dashboard/reports" className="text-red-100 py-1 text-2xl">
          Reports
        </Link>
        <Link to="/dashboard/create-report" className="text-red-100 py-1 text-2xl">
          Create a Report
        </Link>
        <Link to="/dashboard/profile" className="text-red-100 py-1 text-2xl">
          Profile
        </Link>
        <Link to="/sports" className="text-red-100 py-1 text-2xl">
          Sports
        </Link>
      </nav>
      <Outlet />
    </div>
)

}
export default ReporterDashboard