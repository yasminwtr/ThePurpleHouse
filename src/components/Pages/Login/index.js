
import React, { useState, useContext } from 'react'
import logo from '../../assets/img/logo.png'
import { FaUser } from 'react-icons/fa'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOpenIcon from '@mui/icons-material/HttpsRounded';
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/auth';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import './styles.css'


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

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
    if ((email, password) === '') {
      console.log('Todos os campos são obrigatórios!');
      setOpen(true)
      return;
    }
    const incorrectCredentials = await signIn({ email: email, password: password })
    navigate("/Categories", { replace: true });
    if (incorrectCredentials) {
      console.log('Usuário ou senha incorretos')
      setOpen(true)
    }
  }
  
  return (
    <body className='bodylogin'>
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
                type={'text'}
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
                <IconButton sx={{ color: '#655A78' }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
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

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Preencha o formulário para realizar o login
        </Alert>
      </Snackbar>
    </body>
  )
}

export default Login