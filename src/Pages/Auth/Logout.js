import React from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";

const Logout = () =>{
    const navigate = useNavigate() 
    const handleLogout= async()=>{
        localStorage.clear();
        navigate("/")
  
      }
    return(
        <button onClick={handleLogout} className=" mx-2 py-2 hover:bg-red-700 rounded flex gap-4  px-4 lg:px-8 text-xl font-semibold absolute top-2 right-0"><MdLogout className="text-3xl"/></button>
    )
}

export default Logout