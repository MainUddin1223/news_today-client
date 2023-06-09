import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../../contextProvider/useAppcontext";
import Loader from "../loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { appLoading,authData } = useAppContext();
  useEffect(() => {}, [appLoading]);
  console.log(authData?.userinfo.role,appLoading)
  if (appLoading) {
    return <Loader />;
  }
  if (authData?.userinfo.role === "admin") {
    return children;
  } else {
    return <Navigate to="/home" />;
  }
};

export default ProtectedRoute;