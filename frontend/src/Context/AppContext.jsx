import { createContext, useEffect, useState } from "react";
import axios from "axios"

const AppContext = createContext();

const AppProvider = ({ children }) => {

const backendUrl="http://localhost:3000/api/"
 

const [predictons,setPredictions]=useState([]);
const fetchPredictonData=async () => {
  const response=await axios.get(backendUrl+"/predictions");
  setPredictions(...predictons,response.data);
}
useEffect(()=>{
fetchPredictonData();
},[])
useEffect(()=>{
  fetchPredictonData();
  },[predictons])
const value = {backendUrl,predictons};
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
