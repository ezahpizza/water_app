import { createContext } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {

const backendUrl="http://localhost:3000/api/"
 
  const value = {backendUrl};

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
