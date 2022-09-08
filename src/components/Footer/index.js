import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from '../assets/img/logo1.png'
import AuthContext from '../contexts/auth'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const { signed } = useContext(AuthContext)

  const location = useLocation()

  return (
<>
  {location.pathname !== "/Login" && location.pathname !== "/Registration"
  ?
  <footer>
  <div className="container-footer">
      <div className="row-footer">
     
          <div className="footer-col">
          <div className="footer-logo">
                <img src={logo1} width={30} alt="logo1" className="logoFooter"/>
          </div>
          </div>
         
          <div className="footer-col">
          <h4>Links Úteis</h4>
            <ul>
              {signed ?
                <>
                  <li><Link to='/About'>Sobre</Link> </li>
                </>
                :
                <>
                  <li><Link to='/'>Inicial</Link> </li>
                  <li><Link to='/Registration'>Fazer parte</Link> </li>
                  <li><Link to='/About'>Sobre</Link> </li>
                </>
              }
            </ul>
          </div>
        
          
     
          <div className="footer-col">
              <h4>Nos siga!</h4>
              {/* <div className="form-sub">
                  <form>
                      <input type="email" placeholder="Digite o seu e-mail"></input>
                      <button>subscrever</button>
                  </form>
              </div> */}
  
              <div className="medias-socias">
                  <a href="#"> <i><InstagramIcon/></i> </a>
                  <a href="#"> <i><TwitterIcon/></i> </a>
                  <a href="#"> <i><LinkedInIcon/></i> </a>
                  <a href="#"> <i><FacebookIcon/></i> </a>
              </div>
  
          </div>
      </div>
  </div>
  <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 <a href="https://www.codinglabweb.com/2021/05/responsive-footer-using-html-and-css.html">CodingLab.</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="https://policymaker.io/privacy-policy-ready/">Privacy policy</a>
          <a href="https://www.termsfeed.com/live/8c0cf8a9-1796-4b5e-ba83-94e8b9be8ba7">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
        : null
      }
      
    </>
  )
}
export default Footer