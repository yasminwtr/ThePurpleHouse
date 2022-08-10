import React, { useState } from 'react';


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import ButtonGroup from 'react-bootstrap/ButtonGroup';


import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

// import  SearchIcon from '@mui/icons-material/Search';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import person from '../../assets/person.png'


const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.screenY > 200)
  })



  const items = ["banana", "apple", "orange", "pear", "grape", "berry"];
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src={logo} width={40} alt="logo" />
          </div>
          <div className="nav">
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <div className="dropdown-wrapper">
                <button onClick={setShowDropdown} className="trigger-button">
                  Meu perfil
                </button>
                <ul id='showDropdown' className={showDropdown ? "active" : ""}>
                  <Dropdown.ItemText className='img-dropdown' eventKey="1"><img width={100} src={person} /></Dropdown.ItemText>
                  <Dropdown.ItemText className='dropdown-Item1'>Mario Silvo</Dropdown.ItemText>
                  <Dropdown.Item className='dropdown-Item2' eventKey="2"><img width={20} /><StarRoundedIcon /><Link to='/Profile'>Ver Perfil</Link></Dropdown.Item>
                  <Dropdown.Item className='dropdown-Item2' eventKey="4"><img width={20} /><LogoutRoundedIcon />Sair</Dropdown.Item>
                </ul>
              </div>

              <li><Link to='/'>Inicial</Link> </li>
              <li><Link to='/QuemSomos'>Quem somos</Link> </li>
              <li className="icon">
                {/* <SearchIcon className="HeaderIcon"/>
                             <KeyboardArrowRightIcon className="HeaderIcon"/> */}
                <button className="button"><Link to='/Cadastro'>Entrar</Link></button>
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

