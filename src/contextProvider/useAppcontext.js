import React, { createContext, useContext } from 'react';

const AppContext = createContext({});
const AppContextProvider = (props) => {
  const a = 10;
  const { children, values = {} } = props;
  return (
    <AppContext.Provider
      value={{
        a,
        ...values,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => useContext(AppContext);
export { AppContextProvider, useAppContext };
