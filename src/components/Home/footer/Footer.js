import React from "react";
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png'


const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="container flex">
                <div className="logo">
                    <img src={logo} width={40} alt="logo"/>
                </div>
                <div className="nav">
                    <ul className='nav-links'>
                        <li><Link to='/'>Inicial</Link> </li>
                        <li><Link to='/quemsomos'>Quem somos</Link> </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}
export default Footer