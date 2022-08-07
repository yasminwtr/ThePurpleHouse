// import logo from './logo.svg';
// import './App.css';
import '../src/components/Home/styles.css'
// import Home from './components/Home'
// import Categories from './components/Categories'
// import Login from './components/Login'
// import Profile from './components/Profile'
import Header from './components/Home/header/Header'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomePage from './components/PageConent/HomePages';


function App() {
  return (
    
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact  component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
