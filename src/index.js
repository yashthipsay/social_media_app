import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { OtherModeContextProvider } from "./context/otherModeContext";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </DarkModeContextProvider>
);
