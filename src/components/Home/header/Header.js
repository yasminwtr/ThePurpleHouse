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

import person from '../../assets/person.png'
import star from '../../assets/star.png'
import exit from '../../assets/exit.png'


const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.screenY > 200)
  })

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src={logo} width={40} alt="logo" />
          </div>
          <div className="nav">
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
                <div>
                  {[DropdownButton].map((DropdownType, idx) => (
                    <DropdownType className='dropdownType'
                      as={ButtonGroup}
                      key={idx}
                      id={`dropdown-button-drop-${idx}`}
                      size="md"
                      title="Meu perfil"
                    >
                      <Dropdown.ItemText className='img-Dropdown' eventKey="1"><img width={100} src={person} /></Dropdown.ItemText>
                      <Dropdown.ItemText className='dropdown-ItemText'>Mario Silvo</Dropdown.ItemText>
                      <Dropdown.Divider />
                      <Dropdown.Item className='dropdown-ItemText' eventKey="2"><img width={20} src={star} />Ver perfil</Dropdown.Item>
                      <Dropdown.Item className='dropdown-ItemText' eventKey="4"><img width={20} src={exit} />Sair</Dropdown.Item>
                    </DropdownType>
                  ))}
                </div>
              </li>

              <li><Link to=''>Inicial</Link> </li>
              <li><Link to='/quemsomos'>Quem somos</Link> </li>
              <li className="icon">
                {/* <SearchIcon className="HeaderIcon"/>
                             <KeyboardArrowRightIcon className="HeaderIcon"/> */}
                <button className="button">Entrar</button>
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

