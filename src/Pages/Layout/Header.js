import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="bg-gray-700 flex justify-around items-center ">
      <div className="flex">
        <GiHamburgerMenu className="text-2xl text-white"/>
      <img src={logo} alt="" className="w-12 bg-white mx-4 rounded"/>
      </div>
      <nav className="flex space-x-4 text-md font-500">
        <Link to="/home" className="text-red-100 py-1 ">
          Home
        </Link>
        <Link to="/home" className="text-red-100 py-1 ">
          Politics
        </Link>
        <Link to="/home" className="text-red-100 py-1 ">
          Tech
        </Link>
        <Link to="/home" className="text-red-100 py-1 ">
          Sports
        </Link>
        <Link to="/home" className="text-red-100 py-1 ">
          Education
        </Link>
        <Link to="/home" className="text-red-100 py-1 ">
          Business
        </Link>
        <Link to="/home" className="text-red-100 py-1 ">
          Health
        </Link>
        <Link to="/home" className="text-red-100 py-1 ">
          Low
        </Link>
        <Link to="/home" className="text-red-100 py-1 ">
          Entertainment
        </Link>
      </nav>
      <Link
        to="/auth?type=login"
        className="text-red-100 px-2 bg-gray-900 rounded"
      >
        Login
      </Link>
    </div>
  );
};
export default Header;
