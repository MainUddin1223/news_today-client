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
  console.log('called')
  setAppLoading(false)
}

useEffect(()=>{
  const token = localStorage.getItem('token')

  token && afterLogin()
},[])
  const { children, values = {} } = props;
  return (
    <AppContext.Provider
      value={{
        appLoading,
        authData,
        isInviteModal,
        setIsInviteModal,
        afterLogin,
        ...values,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => useContext(AppContext);
export { AppContextProvider, useAppContext };

