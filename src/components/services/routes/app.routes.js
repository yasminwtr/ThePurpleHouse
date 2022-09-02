import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../../Header/"
import Footer from "../../Footer";
import About from "../../../Pages/About";
import Profile from "../../../Pages/Profile";
import WorkerProfile from "../../../Pages/WorkerProfile";
import Chat from '../../../Pages/Chat'
import Categories from "../../../Pages/Categories";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Categories" element={<Categories />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/WorkerProfile" element={<WorkerProfile />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;