import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png'
import AuthContext from '../contexts/auth'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const { signed } = useContext(AuthContext);

    return (
        signed ?
            <>
                <footer className="footer">
                    <div className="container-footer">
                        <div className="footer-logo">
                            <img src={logo} width={40} alt="logo" />
                        </div>
                        <div className="div-links">
                            <ul className='footer-links'>
                                <li><Link to='/'>Serviços</Link> </li>
                                <li><Link to='/About'>Quem somos</Link> </li>
                            </ul>

                        </div>
                    </div>
                </footer>
            </>
            :
            <>
                <footer className="footer">
                    <div className="container-footer">
                        <div className="footer-logo">
                            <img src={logo} width={40} alt="logo" />
                        </div>
                        <div className="div-links">
                            <ul className='footer-links'>
                                <li><Link to='/'>Inicial</Link> </li>
                                <li><Link to='/About'>Quem somos</Link> </li>
                                <li><Link to='/Registration'>Fazer parte</Link> </li>
                            </ul>

                        </div>
                    </div>
                </footer>
            </>
    )
}
export default Footer