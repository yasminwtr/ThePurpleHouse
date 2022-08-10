// import logo from './logo.svg';
// import './App.css';
import '../src/components/Home/styles.css'

import Home from './components/Home/homes/Home'

// import Categories from './components/Categories'

// import Login from './components/Login'
// import Cadastro from './components/Cadastro'

// import Profile from './components/Profile'
// import WorkerProfile from './components/WorkerProfile'

import Header from './components/Home/header/Header'
import Footer from './components/Home/footer/Footer'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import HomePage from './components/PageConent/HomePages';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact  component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
