import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "../../Header/"
import Footer from "../../Footer";
import Home from "../../Pages/Home/"
import About from "../../Pages/About";
import Registration from "../../Pages/Registration"
import Login from "../../Pages/Login"

const AuthRoutes = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact>
          <Header/>
          <Home/>
          <Footer/>
        </Route>
        
        <Route path="/About" exact >
          <Header/>
          <About/>
          <Footer/>
        </Route>
  
        <Route component={Login} path="/Login" exact />
        <Route component={Registration} path="/Registration" exact />
    </BrowserRouter>
  )
}

export default AuthRoutes;