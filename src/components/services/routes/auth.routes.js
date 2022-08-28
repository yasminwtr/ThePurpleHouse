import React from "react";
import { Route, BrowserRouter, Switch, Routes } from "react-router-dom";
import Header from "../../Header/"
import Footer from "../../Footer";
import Home from "../../Pages/Home/"
import About from "../../Pages/About";
import Registration from "../../Pages/Registration"
import Login from "../../Pages/Login"

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        {/* <Route path="/WorkerProfile" element={<WorkerProfile />} />
        <Route path="/Categories" element={<Categories />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default AuthRoutes;