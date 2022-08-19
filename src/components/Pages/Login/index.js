
import React from 'react'
import './styles.css'
import logo from '../../assets/img/logo.png'
import { FaUser } from 'react-icons/fa'
import IconButton from '@mui/material/IconButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import RiLockPasswordFill from 'react-icons/ri'
import LockOpenIcon from '@mui/icons-material/HttpsRounded';
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
        <div className='bodylogin'>
            <div className='header-login'>
                <img className='logo-login' src={logo} />
            </div>
            <div className='container-login'>
                <div className='box-login'>
                    <div>
                        <h1 className='h1-login'>Acesse sua conta</h1>
                    </div>
                    <div className='form-login'>
                        


                        <div className='containerInputLogin'>
                            <FaUser id='iconLogin'/>
                            <input className='inputLogin' type={'text'} placeholder='E-mail' />
                        </div>

                         <div  className='containerInputLogin' >
                         <LockOpenIcon id='iconLogin'/>
                            <input className='inputLogin'
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
                            <button className='button-login'>Entrar</button>
                            <div>
                                <label className='label-login'>Não possui uma conta? </label>
                                {/* <a className='a-cadastro' href=''>Cadastre-se</a> */}
                                <a  href="/Registration" className='a-login'><Link to='/Registration' className='a-login'> Cadastre-se</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login