import { createContext, useEffect, useState } from "react";

export const OtherModeContext = createContext();

export const OtherModeContextProvider = ({ children }) => {
  let [otherMode, setOtherMode] = useState(false);

  let toggle2 = () => {
    setOtherMode(!otherMode);
  };

  useEffect(() => {
    localStorage.setItem("otherMode", otherMode);
  }, [otherMode]);

  return (
    <OtherModeContext.Provider value={{ otherMode, toggle2 }}>
      {children}
    </OtherModeContext.Provider>
  );
};
