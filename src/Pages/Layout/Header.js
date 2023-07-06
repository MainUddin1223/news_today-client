import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [showNav,setShowNav] = useState(false)
  return (
    <div className="bg-gray-700 py-2 flex justify-around items-center sticky top-0">
      <div className="flex">
        <GiHamburgerMenu className="text-2xl text-white hamburgerMenu" onClick={()=>{setShowNav(!showNav)}}/>
      <img src={logo} alt="" className="w-12 bg-white mx-4 rounded company-logo"/>
      </div>
      <nav className={`flex lg:space-x-4 text-md nav-list ${showNav?"show-nav":'hide-nav'}`}>
        {/* <Link to="/home" className="text-red-100 py-1 nav-item">
          Home
        </Link> */}
        <Link to="/home" className="text-red-100 py-1 nav-item">
          Home
        </Link>
        <Link to="/politics" className="text-red-100 py-1 nav-item">
          Politics
        </Link>
        <Link to="/home" className="text-red-100 py-1 nav-item">
          Tech
        </Link>
        <Link to="/home" className="text-red-100 py-1 nav-item">
          Sports
        </Link>
        <Link to="/home" className="text-red-100 py-1 nav-item">
          Education
        </Link>
        <Link to="/home" className="text-red-100 py-1 nav-item">
          Business
        </Link>
        <Link to="/home" className="text-red-100 py-1 nav-item">
          Health
        </Link>
        <Link to="/home" className="text-red-100 py-1 nav-item">
          Low
        </Link>
        <Link to="/home" className="text-red-100 py-1 nav-item">
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
