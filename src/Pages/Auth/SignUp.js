import axios from "axios";
import React, { useState } from "react";
import loginImg from "../../assets/login.jpg";
import Layout from "../Layout/Layout";



const baseURL = process.env.REACT_APP_SERVER_URL;
const SignUp = ({setSearchParams}) => {
  const [signUpData,setSignUpData] = useState({
    email:'',
    name:{
      firstName:'',
      lastName:''
    },
    password:''
  })

  const handleSignUp = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios({
        method: 'post',
        url:`${baseURL}auth/signup`,
        data:signUpData
      });
      if(response){
        console.log(response.data)
      }
    } catch (error) {
      if(error.response && error.response.status === 400){
        console.log(error.message)
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
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  First name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e)=>{setSignUpData((prev)=>({...signUpData,name:{...signUpData.name,firstName:e.target.value}}))}}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Last name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(e)=>{setSignUpData((prev)=>({...signUpData,name:{...signUpData.name,lastName:e.target.value}}))}}
                />
              </div>
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
                  onChange={(e)=>{setSignUpData((prev)=>({...signUpData,email:e.target.value}))}}
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
                  onChange={(e)=>{setSignUpData((prev)=>({...signUpData,password:e.target.value}))}}
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
              <p>Already have an account?<span className="text-blue-500 cursor-pointer" onClick={(e)=>{setSearchParams({ type: 'login'});}}>Login</span></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SignUp;
