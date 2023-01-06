import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import NavBar from "./components/navbar/NavBar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./style.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { OtherModeContext } from "./context/otherModeContext";
import { AuthContext } from "./context/authContext";
function App() {
  const currentuser = false; // User not logged in yet
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  console.log(darkMode);
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Home />
          <RightBar />
        </div>
      </div>
    );
  };

  //In the function below, if the user is not signed in, the sub layout will be protected
  //If user is not signed in, it will navigate to login page
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Protecting the route if user is not signed in
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    { path: "/login", element: <Login /> },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  ); // Calling router provider
}

export default App;
