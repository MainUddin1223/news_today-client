import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <nav className="flex justify-center space-x-4 font-semibold bg-red-800">
        <Link to="/home" className="text-red-100 py-1 text-2xl">
          Home
        </Link>
        <Link to="/admin/reports" className="text-red-100 py-1 text-2xl">
          Reports
        </Link>
        <Link to="/admin/approval" className="text-red-100 py-1 text-2xl">
          Approval
        </Link>
        <Link to="/admin/stuff" className="text-red-100 py-1 text-2xl">
          Stuff
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default AdminDashboard;
