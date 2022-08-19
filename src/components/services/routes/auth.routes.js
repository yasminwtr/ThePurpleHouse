import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
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
      <Route component={Home} path="/" exact />
      <Route component={About} path="/About" exact />
      <Route component={Registration} path="/Registration" exact />
      <Route component={Login} path="/Login" exact />
      <Footer />
    </BrowserRouter>
  )
}

export default AuthRoutes;