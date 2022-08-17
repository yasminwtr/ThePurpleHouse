import React from 'react'
import './style.css'
import logo from '../assets/img/logo.png'
import { FaUser } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import RiLockPasswordFill from 'react-icons/ri'
import LockOpenIcon from '@mui/icons-material/HttpsRounded';
import { Link } from 'react-router-dom'
import { Formik } from "formik";
import * as Yup from "yup";

const Cadastro = () => {
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
    <Formik
      initialValues={{ fullName: "", email: "", phoneNumber: "", birthDate: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}

      validationSchema={Yup.object().shape({
        fullName: Yup.string()
          .required(''),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required(''),
        phoneNumber: Yup.string()
          .required(''),
        password: Yup.string()
          .required('')
          .min(8, 'A senha deve ter no minímo 8 caracteres')
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit  
        } = props;

        return (
          <form onSubmit={handleSubmit}>
            <div>
              <div className='header-cadastro'>
                <img className='logo-cadastro' src={logo} />
              </div>
              <div className='container-cadastro'>
                <div className='box-cadastro'>
                  <div>
                    <h1 className='h1-cadastro'>Crie sua conta!</h1>
                  </div>
                  <div className='form-cadastro'>
                    <div className='containerInputRegister'>
                      <FaUser id='iconRegister' />
                      <input
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.fullName && touched.fullName && "error"}
                        id='fullName'
                        placeholder='Nome completo'
                        type={'text'}
                      />
                    </div>
                    <div className="input-feedback">{errors.fullName}</div>
                    <div className='containerInputRegister'>
                      < EmailIcon id='iconRegister' />
                      <input
                        id='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                        placeholder='E-mail'
                      />
                    </div>
                    <div className="input-feedback">{errors.email}</div>
                    <div className='containerInputRegister'>
                      <BsFillTelephoneFill id='iconRegister' />
                      <input
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phoneNumber && touched.phoneNumber && "error"}
                        id='phoneNumber'
                        type={'tel'}
                        placeholder='Celular' />
                    </div>

                    <div className='containerInputRegister'>
                      <input className='inputRegister' type={'date'}/>
                    </div>

                    <div className='containerInputRegister' >
                      <LockOpenIcon id='iconRegister' />
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                        placeholder='Senha'
                        id='password'
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password} />
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
                    <div className="input-feedback">{errors.password}</div>

                    <div>
                      <button type='submit' disabled={isSubmitting} className='button-cadastro'>Cadastrar</button>
                      <div>
                        <label className='label-cadastro'>Já possui uma conta?</label>
                        {/* <a className='a-cadastro' href=''>Entre</a> */}
                        <a href="/Login" className='a-cadastro'><Link to='/Login' className='a-cadastro'> Entrar</Link></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )
      }
      }
    </Formik>
  )


}
export default Cadastro