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
import logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiPadlock } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'


function Cadastro() {
    return (
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
                        <div className='icon-cadastro'>
                            <input className='input-cadastro' type={'text'} placeholder='Nome completo' />
                        </div>
                        <input className='input-cadastro' type={'email'} placeholder='E-mail' />
                        <input className='input-cadastro' type={'tel'} placeholder='Numero Celular' />
                        <input className='input-cadastro' type={'date'} placeholder='Data de Nascimento' />
                        <input className='input-cadastro' type={'password'} placeholder='Senha' />
                        <div>
                            <button className='button-cadastro'>Entrar</button>
                            <div>
                                <label className='label-cadastro'>Já possui uma conta?</label>
                                <a className='a-cadastro' href=''>Entre</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro