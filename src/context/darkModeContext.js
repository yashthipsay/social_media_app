import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

// This is a protected route. It will check the use state whether dark mode is used or not
export const DarkModeContextProvider = ({ children }) => {
  let [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  let toggle = () => {
    // darkMode = themearray[3];

    setDarkMode(!darkMode);
  };

  //The below function is to change the state of darkModew
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
