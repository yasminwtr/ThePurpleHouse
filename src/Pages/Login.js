import React, { useState, useContext } from 'react'
import logo from '../assets/img/logo2.png'
import { FaUser } from 'react-icons/fa'
import IconButton from '@mui/material/IconButton';
import LockOpenIcon from '@mui/icons-material/HttpsRounded';
import { Link } from 'react-router-dom'
import AuthContext from '../services/contexts/auth'
import { useNavigate } from "react-router-dom";
import { HiOutlineEye } from 'react-icons/hi';
import { HiOutlineEyeOff } from 'react-icons/hi'
import { notification } from 'antd';

function Login() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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

  async function validateLogin() {
    const incorrectCredentials = await signIn({ email: email, password: password })
    navigate("/Categories", { replace: true });
    if (incorrectCredentials) {
      navigate("/Login", { replace: true });
      return notification["error"]({
        message: 'Usuário ou senha incorretos',
        duration: 2,
        placement: 'bottom',
      })
    }
  }

  return (
    <div className='bodylogin'>
      <div className='header-login'>
        <Link to='/'><img className='logo-login' src={logo} /></Link>
      </div>
      <div className='container-login'>
        <div className='box-login'>
          <div>
            <h1 className='h1-login'>Acesse sua conta</h1>
          </div>
          <div className='form-login'>
            <div className='containerInputLogin'>
              <FaUser id='iconLogin' />
              <input
                onChange={(event) => setEmail(event.target.value)}
                className='inputLogin'
                type={'email'}
                placeholder='E-mail'
              />
            </div>
            <div className='containerInputLogin' >
              <LockOpenIcon id='iconLogin' />
              <input
                onChange={(event) => setPassword(event.target.value)}
                className='inputLogin'
                placeholder='Senha'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
              />
              <div>
                <IconButton id='iconLogin'
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                </IconButton>
              </div>
            </div>
            <div>
              <button onClick={validateLogin} className='button-login'>Entrar</button>
              <div>
                <label className='label-login'>Não possui uma conta? </label>
                <a href="/Registration" className='a-login'><Link to='/Registration' className='a-login'> Cadastre-se</Link></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login