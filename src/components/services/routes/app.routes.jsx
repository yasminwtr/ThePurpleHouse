import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "../../Footer";
import About from "../../../Pages/About";
import Profile from "../../../Pages/Profile";
import WorkerProfile from "../../../Pages/WorkerProfile";
import Chat from '../../../Pages/Chat'
import Categories from "../../../Pages/Categories";
import Navbar from "Pages/Home/components/Navbar";

const AppRoutes = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <BrowserRouter>
      <div data-theme={theme} className="app-container">
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/WorkerProfile" element={<WorkerProfile />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRoutes;