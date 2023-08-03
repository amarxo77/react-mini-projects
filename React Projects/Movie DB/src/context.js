import { useState } from "react";
import useFetch from "./useFetch";

const { useContext } = require("react");
const { createContext } = require("react");



const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [query, setQuery] = useState("batman");

 const {isLoading, error, data: movies} = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, setQuery, query }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
