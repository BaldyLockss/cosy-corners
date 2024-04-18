import { createContext } from "react";

const ContextProvider = createContext();

export const ContextWrapper = ({ children }) => {
  return (
    <ContextProvider.Provider value={{}}>{children}</ContextProvider.Provider>
  );
};

export default ContextProvider;
