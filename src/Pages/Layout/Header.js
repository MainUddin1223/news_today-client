import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-800 relative">
      <nav className="flex justify-center space-x-4 font-semibold">
        <Link to="/home" className="text-red-100 py-1 text-2xl">
          Home
        </Link>
        <Link to="/home" className="text-red-100 py-1 text-2xl">
          About
        </Link>
        <Link to="/home" className="text-red-100 py-1 text-2xl">
          News
        </Link>
        <Link to="/home" className="text-red-100 py-1 text-2xl">
          Sports
        </Link>
      </nav>
      <p className="text-red-100 py-1 text-2xl absolute right-4 top-0 font-semibold cursor-pointer">Login</p>
    </div>
  );
};
export default Header;
