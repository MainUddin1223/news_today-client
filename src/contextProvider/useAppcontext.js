import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRequest } from '../utilis/apiRequest';

const AppContext = createContext({});
const AppContextProvider = (props) => {

  const [appLoading,setAppLoading] = useState(true)
  const [myInfo,{state:authData}] = useRequest();
  const [isInviteModal, setIsInviteModal] = useState(false);
const afterLogin = async()=>{
  setAppLoading(true)
  const path = 'auth/login';
  await myInfo({
    path,
    method:'GET'    
  })
  setAppLoading(false)
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
useEffect(()=>{
  const token = localStorage.getItem('token')

  token && afterLogin()
},[])
  const { children, values = {} } = props;
  return (
    <AppContext.Provider
      value={{
        appLoading,
        setAppLoading,
        authData,
        isInviteModal,
        setIsInviteModal,
        afterLogin,
        scrollToTop,
        ...values,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => useContext(AppContext);
export { AppContextProvider, useAppContext };

