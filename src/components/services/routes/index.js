import React, { useContext } from "react";
import AuthContext from '../../contexts/auth';
import AuthRoutes from './auth.routes';
import Routes from "./app.routes";

const Routes = () => {
  const { signed } = useContext(AuthContext);
  console.log("signed @ services/routes/index.js, ", signed);
  return signed ? <Routes /> : <AuthRoutes />;
};

export default Routes;