import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../../contextProvider/useAppcontext";
import Loader from "../loader/Loader";

const ProtectedRoute = ({ children,value }) => {
  const { appLoading,authData } = useAppContext();
  useEffect(() => {}, [appLoading]);
  if (appLoading) {
    return <Loader />;
  }
  if (authData?.userinfo.role === value) {
    return children;
  } else {
    return <Navigate to="/home" />;
  }
};

export default ProtectedRoute;
