import React, { useEffect, useState } from "react";
import { useRequest } from "../../../utilis/apiRequest";

const MyReportsList = () => {
    const [getAllNews,{state,isLoading}] = useRequest()
    const [reportsList,setReportsList]=useState([])
    useEffect(()=>{
        getAllNews({
            path:'news/get-all-news',
        method:'GET'
        });
        if(!isLoading){

            setReportsList(state?.result)
        }
    },[])
    console.log(reportsList)
  return <div>This is reports</div>;
};
export default MyReportsList;
