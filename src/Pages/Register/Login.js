import React, { useState } from "react";
import { useNavigate } from "react-router";
import loginImg from "../../assets/login.jpg";
import { useAppContext } from "../../contextProvider/useAppcontext";
import { useRequest } from "../../utilis/apiRequest";
import Layout from "../Layout/Layout";


const Login = ({setSearchParams}) => {
const [login]= useRequest()
const [userInfo,setUserInfo] = useState({})
const navigate = useNavigate();
const {afterLogin} = useAppContext()

const handleLogin= async(e)=>{
  e.preventDefault();
  const path = 'auth/login';
  const result = await login({
    body:userInfo,
    path,
    method:'POST'    
  })
  if(result.status === 200){
    const userData = result.result
   await localStorage.setItem('token',result.result.token);
   console.log('userData',userData)
    await afterLogin()
    if(userData.role == 'reporter'){
      navigate("/reporter")
    }else{
      navigate("/")
    }
  }
}
 
  return (
    <Layout>
      <div className="flex md:flex-row flex-col items-center justify-center h-screen">
        <div className="w-1/2">
          <img src={loginImg} alt="" className="w-3/4 md:block hidden mx-auto" />
        </div>
        <div className="md:w-1/2 w-3/4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="Enter your Email"
                  onChange={(e)=>{setUserInfo((prev)=>({...userInfo,email:e.target.value}))}}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e)=>{setUserInfo((prev)=>({...userInfo,password:e.target.value}))}}
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="my-2 text-center font-semibold">
              <p>New in News Today?<span className="text-blue-500 cursor-pointer" onClick={(e)=>{setSearchParams({ type: 'signup'});}}>Sign up</span></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
