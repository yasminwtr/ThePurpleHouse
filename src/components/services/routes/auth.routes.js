import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../../Header/"
import Footer from "../../Footer";
import Home from "../../Pages/Home/"
import About from "../../Pages/About";
import Registration from "../../Pages/Registration"
import Login from "../../Pages/Login"

const AuthRoutes = () => {
  return (
    <BrowserRouter forceRefresh={true}>
      <Header/>
      <Routes forceRefresh={true}>
        <Route forceRefresh={true} index element={<Home />} />
        <Route forceRefresh={true} path="/About" element={<About />} />
        <Route forceRefresh={true} path="/Login" element={<Login />} />
        <Route forceRefresh={true} path="/Registration" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default AuthRoutes;