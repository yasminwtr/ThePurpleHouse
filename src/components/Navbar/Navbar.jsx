import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../../assets/img/logo1.png";

import DropdownProfile from "../Dropdown/index"
import AuthContext from '../../services/contexts/auth'
import { Link, useLocation } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const { signed } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false)

  // window.addEventListener("scroll", function () {
  //   const header = this.document.querySelector(".header")
  //   header.classList.toggle("active", this.window.screenY > 200)
  // })

  const location = useLocation()
  return (
    <>
     {location.pathname !== "/Login" && location.pathname !== "/Registration"
        ?
  <nav>
    
      <div className="brand-container">
        <div className="logo">
          <Link to='/'><img src={logo} width={55} alt="logo1" /></Link>
          <span className="title-header">The Purple House</span>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
        {signed ?
                  <>
                    <li className='link-sidebar' ><Link to='/Categories'>Categorias</Link> </li>
                    <li className='link-sidebar' ><Link to='/Chat'>Mensagens</Link> </li>
                    <li><DropdownProfile /></li>
                  </>
                  :
                  <>
                    <li><Link to='/'>Inicial</Link> </li>
                    <li><Link to='/About'>Quem somos</Link> </li>
                    <li className="icon">
                      <Link to='/Login' ><button className="buttonNav">Entrar</button></Link>
                    </li>
                  </>
                }
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
    : null
      }
    </>
  );
}
