import React, { useState } from 'react';
import DropdownProfile from "../../Dropdown/index"
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
// import  SearchIcon from '@mui/icons-material/Search';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

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
            <DropdownProfile />
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li><Link to='/'>Inicial</Link> </li>
              <li><Link to='/Categories'>Categorias</Link> </li>
              <li className='li-link'><Link to='/Profile'>Meu Perfil</Link> </li>
              <li><Link to='/QuemSomos'>Quem somos</Link> </li>
              <li><Link to='/Chat'>Mensagens</Link> </li>
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

