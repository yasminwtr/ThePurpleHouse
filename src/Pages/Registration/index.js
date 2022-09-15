import React, { useState, useContext } from 'react'
import './styles.css'
import logo from '../../components/assets/img/logo2.png'
import { FaUser } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/HttpsRounded';
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded';
import { Link } from 'react-router-dom'
import { Formik } from "formik";
import * as Yup from "yup";
import api from '../../api'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AuthContext from '../../components/contexts/auth'
import { useNavigate } from "react-router-dom";
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import { HiOutlineEye } from 'react-icons/hi';
import { HiOutlineEyeOff } from 'react-icons/hi'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Cadastro = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const { signIn } = useContext(AuthContext);
  const [validEmail, setValidEmail] = useState(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)
  const navigate = useNavigate()

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

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  function validationFields() {
    if ((firstName, lastName, email, password, birthDate) !== ''
      && password.length >= 8
      && email.match(validEmail)) {
      registerNewUser()
      navigate("/Categories", { replace: true });
    } else {
      setOpen(true)
      return;
    }
  }

  async function registerNewUser() {
    try {
      const response = await api.post('/registerUser', { firstName, lastName, email, password, birthDate });
      await signIn({ email, password })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Formik
      initialValues={{ firstName: "", email: "", birthDate: "", password: "" }}
      onSubmit={(valuesForm, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}

      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required(''),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required(''),
        password: Yup.string()
          .required('')
          .min(8, 'A senha deve ter no mínimo 8 caracteres')
      })}
    >
      {props => {
        const {
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;

        return (
          <form onSubmit={handleSubmit} className="body-cadastro">
            <div>
              <div className='header-cadastro'>
                <Link to='/'><img className='logo-cadastro' src={logo} /></Link>
              </div>
              <div className='container-cadastro'>
                <div className='box-cadastro'>
                  <div>
                    <h1 className='h1-cadastro'>Crie sua conta!</h1>
                  </div>
                  <div className='form-cadastro'>
                    <Row className="g-3 row-register">
                      <Col md={6}>
                        <div className='containerInputRegister input-name'>
                          <FaUser id='iconRegister' />
                          <input
                            name="firstName"
                            onChange={(event) => setFirstName(event.target.value)}
                            id='firstName'
                            placeholder='Nome'
                            type={'text'}
                          />
                        </div>
                      </Col>
                      <Col md>

                        <div className='containerInputRegister input-lastname'>
                          <input
                            name="lastName"
                            onChange={(event) => setLastName(event.target.value)}
                            id='lastName'
                            placeholder='Sobrenome'
                            type={'text'}
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className='containerInputRegister'>
                      < EmailIcon id='iconRegister' />
                      <input
                        id='email'
                        onChange={(event) => setEmail(event.target.value)}
                        onInputCapture={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                        placeholder='E-mail'
                      />
                    </div>
                    <div className="input-feedback">{errors.email}</div>

                    <div className='containerInputRegister'>
                      <CalendarIcon id='iconRegister' />
                      <input
                        onChange={(event) => setBirthDate(event.target.value)}
                        className='inputRegister'
                        type={'date'}
                      />
                    </div>

                    <div className='containerInputRegister' >
                      <LockOpenIcon id='iconRegister' />
                      <input
                        onChange={(event) => setPassword(event.target.value)}
                        onInputCapture={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                        placeholder='Senha'
                        id='password'
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password} />
                      <div>
                        <IconButton sx={{ color: '#616161' }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                        </IconButton>
                      </div>
                    </div>
                    <div className="input-feedback">{errors.password}</div>

                    <div>
                      <button type='submit' onClick={() => validationFields()} disabled={isSubmitting} className='button-cadastro'>Cadastrar</button>
                      <div>
                        <label className='label-cadastro'>Já possui uma conta?</label>
                        <a href="/Login" className='a-cadastro'><Link to='/Login' className='a-cadastro'> Entrar </Link></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Preencha o formulário para realizar o cadastro
              </Alert>
            </Snackbar>
          </form>
        )
      }
      }
    </Formik>
  )
}
export default Cadastro