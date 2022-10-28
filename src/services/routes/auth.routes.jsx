import React, { useContext, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "components/Footer";
import Navbar from "components/Navbar/Navbar";
import Home from "Pages/Home";
import About from "Pages/AboutUs";
import Registration from "Pages/Registration"
import Login from "Pages/Login"
import AuthContext from "services/contexts/auth";

const AuthRoutes = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const { signed } = useContext(AuthContext);

  function PrivateRoute({ children }) {
    return signed ? children : children
  }

  return (
    <BrowserRouter>
      <div data-theme={theme} className="app-container">
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Categories" element={<PrivateRoute />} />
          <Route path="/Profile" element={<PrivateRoute />} />
          <Route path="/WorkerProfile" element={<PrivateRoute />} />
          <Route path="/Chat" element={<PrivateRoute />} />
          <Route path="*" element={<PrivateRoute />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
  )
}

export default AuthRoutes;