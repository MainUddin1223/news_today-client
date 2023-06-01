import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Register = ()=>{
    const [searchParams, setSearchParams] = useSearchParams({});
    const [authType,setAuthType]= useState(searchParams.get('type'));
    useEffect(()=>{
        setAuthType(searchParams.get('type'))
    },[searchParams])
    return(
        <div>
            {
                !authType || authType === 'login'?<Login setSearchParams={setSearchParams}/>:<SignUp setSearchParams={setSearchParams}/>
            }
        </div>
    )
}
export default Register