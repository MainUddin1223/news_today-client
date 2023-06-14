import React from "react";
import { useNavigate } from "react-router";

const Logout = () =>{
    const navigate = useNavigate() 
    const handleLogout= async()=>{
        localStorage.clear();
        navigate("/")
  
      }
    return(
        <button onClick={handleLogout} className="bg-gray-300 mx-2 py-1 rounded">Logout</button>
    )
}

export default Logout