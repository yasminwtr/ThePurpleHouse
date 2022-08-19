import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/";
import About from "./About";
import Registration from "./Registration"
import Profile from "./Profile";
import WorkerProfile from "./WorkerProfile";
import Chat from './Chat'
import Categories from "./Categories";
import Login from "./Login"

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