// import React from 'react'
// import './style.css'
// import logo from '../assets/logo.png'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

// import PlaceIcon from '@mui/icons-material/Place';

// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// function Cadastro() {
//   const [values, setValues] = React.useState({
//     amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div>

//       <div className='header-cadastro'>
//         <img className='logo-cadastro' src={logo} />
//       </div>

//       <div className='container-cadastro'>

//       <div className="box-cadastro">
//         <h2 className='h2Cadastro'>Crie sua conta!</h2>
//         <form className='formCadastro'>

//             <Box className="inputRegister" sx={{ '& > :not(style)': { m: 1.5 } }}>
//               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                 <PersonIcon sx={{ color: '#3E3848', mr: 2, my: 1.5 }} />
//                 <TextField id="input-with-sx" label="Nome completo" variant="standard" />
//               </Box>
//             </Box>

//             <Box className="inputRegister" sx={{ '& > :not(style)': { m: 1.5 } }}>
//               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                 <EmailIcon sx={{ color: '#3E3848', mr: 2.5, my: 1.5 }} />
//                 <TextField id="input-with-sx" label="E-mail" variant="standard" />
//               </Box>
//             </Box>

//             <Box className="inputRegister" sx={{ '& > :not(style)': { m: 1.5 } }}>
//               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//                 <LocalPhoneIcon sx={{ color: '#3E3848', mr: 2.5, my: 1.5 }} />
//                 <TextField id="input-with-sx" label="Numero Celular" variant="standard" />
//               </Box>
//             </Box>

//             <input className='input-cadastro' type={'date'} placeholder='Data de Nascimento' />


//           <Box className="inputRegisterPass" sx={{ '& > :not(style)': { mr: 2.5, m: 1.5 } }}>
//           <div>
//       <FormControl sx={{ m: 0, width: '23ch' }} variant="standard">

//           <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton sx={{ color: '#3E3848', mr: 0.-2, my: 1.5 }}
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {values.showPassword ?  <Visibility />:  <VisibilityOff />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>

//       </div>
//     </Box>

//         </form>
//             <div className='botaoRegister'>
//               <button className='button-cadastro'>Entrar</button>
//               <div>
//                 <label className='label-cadastro'>Já possui uma conta?</label>
//                 <a className='a-cadastro' href=''>Entre</a>
//               </div>
//             </div>

//    </div>


//       </div>

//     </div >
//   )
// }

// export default Cadastro


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
import LockOpenIcon from '@mui/icons-material/LockOpen';
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
                      <FaUser id='searchIconRegister' />
                      <input
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.fullName && touched.fullName && "error"}
                        className='inputSearchChatRegister'
                        id='fullName'
                        placeholder='Nome completo'
                        type={'text'}
                      />
                    </div>
                    <div className="input-feedback">{errors.fullName}</div>
                    <div className='containerInputRegister'>
                      < EmailIcon id='searchIconRegister' />
                      <input
                        id='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                        className='inputSearchChatRegister'
                        placeholder='E-mail'
                      />
                    </div>
                    <div className="input-feedback">{errors.email}</div>
                    <div className='containerInputRegister'>
                      <BsFillTelephoneFill id='searchIconRegister' />
                      <input
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phoneNumber && touched.phoneNumber && "error"}
                        id='phoneNumber'
                        className='inputSearchChatRegister'
                        type={'tel'}
                        placeholder='Numero Celular' />
                    </div>

                    <div className='containerInputRegister'>
                      <input className='inputSearchChatRegister' type={'date'} placeholder='Numero Celular' />
                    </div>

                    <div className='containerInputRegister' >
                      <LockOpenIcon id='searchIconRegister' />
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                        className='inputSearchChatRegister'
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
                        <a href="/Login" className='a-cadastro'><Link to='/Login' className='a-cadastro'>Entre</Link></a>
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