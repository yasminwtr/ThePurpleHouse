import React, { useContext } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Header from "../../Header/"
import Footer from "../../Footer";
import Home from "../../../Pages/Home/"
import About from "../../../Pages/About";
import Registration from "../../../Pages/Registration"
import Login from "../../../Pages/Login"
import AuthContext from '../../contexts/auth'

const AuthRoutes = () => {
  const { signed } = useContext(AuthContext);

  function PrivateRoute({ children }){
  return signed ? children : <Navigate to='/'/>}

  return (
    <BrowserRouter>
      <Header/>
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
    </BrowserRouter >
  )
}

export default AuthRoutes;