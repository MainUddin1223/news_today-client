import React, { createContext, useContext, useEffect } from 'react';
import { useRequest } from '../utilis/apiRequest';

const AppContext = createContext({});
const AppContextProvider = (props) => {

  const [myInfo] = useRequest();

const afterLogin = async()=>{
  const path = 'auth/login';
  const result = await myInfo({
    path,
    method:'GET'    
  })
  if(result){
    console.log(result)
  }
}

useEffect(()=>{
  afterLogin()
},[])

  const { children, values = {} } = props;
  return (
    <AppContext.Provider
      value={{
        ...values,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => useContext(AppContext);
export { AppContextProvider, useAppContext };

