import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/";
import QuemSomos from "./QuemSomos";
import Cadastro from "./Cadastro/"
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
      <Route component={QuemSomos} path="/QuemSomos" exact />
      <Route component={Cadastro} path="/Cadastro" exact />
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