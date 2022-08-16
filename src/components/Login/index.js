
import React from 'react'
import './styles.css'
import logo from '../assets/img/logo.png'
import { FaUser } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import IconButton from '@mui/material/IconButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import RiLockPasswordFill from 'react-icons/ri'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Link} from 'react-router-dom'

function Login() {
    const [values, setValues] = React.useState({
  
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
   

    return (
        <div>
            <div className='header-cadastro'>
                <img className='logo-cadastro' src={logo} />
            </div>
            <div className='container-cadastro'>
                <div className='box-cadastro'>
                    <div>
                        <h1 className='h1-cadastro'>Acesse sua conta</h1>
                    </div>
                    <div className='form-login'>
                        


                        <div className='containerInputLogin'>
                            <FaUser id='searchIconRegister'/>
                            <input className='inputSearchChatRegister' type={'text'} placeholder='Email ou Telefone' />
                        </div>

                         <div  className='containerInputLogin' >
                         <LockOpenIcon id='searchIconRegister'/>
                            <input className='inputSearchChatRegister'
                            placeholder='Senha'
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}/>
                             <div>
                                 <IconButton sx={{ color: '#655A78'}}
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ?  <Visibility />:  <VisibilityOff />}
                                </IconButton> 
                            </div>
                    </div>
                   

                    
                 {/*   <input className='input-cadastro' type={'password'} placeholder='Senha' /> */}
                        <div>
                            <button className='button-cadastro'>Entrar</button>
                            <div>
                                <label className='label-cadastro'>Não possui uma conta? </label>
                                {/* <a className='a-cadastro' href=''>Cadastre-se</a> */}
                                <a  href="/Cadastro" className='a-cadastro'><Link to='/Cadastro' className='a-cadastro'>Cadastre-se</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login