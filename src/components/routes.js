import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Home/header/Header";
import Footer from "./Home/footer/Footer";
import Home from "./Home/homes/home";
import QuemSomos from "./QuemSomos";
import Cadastro from "./Cadastro/index"
import Profile from "./Profile";
import WorkerProfile from "./WorkerProfile";
import Chat from './Chat'

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
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;