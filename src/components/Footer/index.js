import React from "react";
import {Link} from "react-router-dom";
import logo from '../assets/img/logo.png'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="container flex">
                <div className="logo">
                    <img src={logo} width={40} alt="logo"/>
                </div>
                <div className="footer">
                    <ul className='footer-links'>
                        <li><Link to='/'>Inicial</Link> </li>
                        <li><Link to='/About'>Quem somos</Link> </li>
                        <li><Link to='/'>Serviços</Link> </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}
export default Footer