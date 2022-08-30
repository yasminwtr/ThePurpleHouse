import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from '../assets/img/logo1.png'
import AuthContext from '../contexts/auth'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const { signed } = useContext(AuthContext)

  const location = useLocation()

  return (
    <>
      {location.pathname !== "/Login" &&  location.pathname !== "/Registration"
        ?
        <footer className="footer">
          <div className="container-footer">
            <div className="footer-logo">
              <img src={logo1} width={30} alt="logo1" />
            </div>
            <div className="div-links">
              <ul className='footer-links'>
                {signed ?
                  <>
                    <li><Link to='/About'>Sobre</Link> </li>
                  </>
                  :
                  <>
                    <li><Link to='/'>Inicial</Link> </li>
                    <li><Link to='/About'>Sobre</Link> </li>
                    <li><Link to='/Registration'>Fazer parte</Link> </li>
                  </>
                }
              </ul>
            </div>
          </div>
        </footer>
        : null
      }
    </>
  )
}
export default Footer