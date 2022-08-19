import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Registration from "./Pages/Registration"
import Profile from "./Pages/Profile";
import WorkerProfile from "./Pages/WorkerProfile";
import Chat from './Pages/Chat'
import Categories from "./Pages/Categories";
import Login from "./Pages/Login"

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route component={Home} path="/" exact />
      <Route component={About} path="/About" exact />
      <Route component={Registration} path="/Registration" exact />
      <Route component={Profile} path="/Profile" exact />
      <Route component={WorkerProfile} path="/WorkerProfile" exact />
      <Route component={Chat} path="/Chat" exact />
      <Route component={Categories} path="/Categories" exact />
      <Route component={Login} path="/Login" exact />
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;