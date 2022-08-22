import React, { useState, useContext } from 'react';
import DropdownProfile from "./Dropdown/index"
import AuthContext from '../contexts/auth'
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css'

const Header = () => {
  const { signed } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false)

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.screenY > 200)
  })

  return (
    signed ?
      <>
        <header className="header">
          <div className="container flex">
            <div className="logo">
              <Link to='/'><img src={logo} width={50} alt="logo" /></Link>
              <span className='title-header'>The Purple House</span>
            </div>
            <div className="nav">
              <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                <li><Link to='/Categories'>Serviços</Link> </li>
                <li><Link to='/Chat'>Mensagens</Link> </li>
                <li><DropdownProfile /></li>
              </ul>
            </div>
            <button className="navbar-itens-icon" onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </header>
      </>
      :
      <>
        <header className="header">
          <div className="container flex">
            <div className="logo">
              <Link to='/'><img src={logo} width={50} alt="logo" /></Link>
              <span className='title-header'>The Purple House</span>
            </div>
            <div className="nav">
              <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                <li><Link to='/'>Inicial</Link> </li>
                <li><Link to='/About'>Quem somos</Link> </li>
                <li className="icon">
                <Link to='/Login' ><button className="button">Entrar</button></Link>
                </li>
              </ul>
            </div>
            <button className="navbar-itens-icon" onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </header>
      </>
  )
}
export default Header

