import React from 'react'
import './style.css'
import logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiPadlock } from 'react-icons/gi'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'


import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import PlaceIcon from '@mui/icons-material/Place';

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
            {/* <Box sx={{ '& > :not(style)': { m: 0.1 } }}>
              <Box className='input-cadastro' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 1.5 }} />
                <TextField id="input-with-sx" label="Nome completo" variant="standard" />
              </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 0.5 } }}>
              <Box className='input-cadastro' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 1.2 }} />
                <TextField id="input-with-sx" label="E-mail" variant="standard" />
              </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 0.5 } }}>
              <Box className='input-cadastro' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 1.2 }} />
                <TextField id="input-with-sx" label="Numero Celular" variant="standard" />
              </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 0.5 } }}>
              <Box className='input-cadastro' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 1.2 }} />
                <TextField id="input-with-sx" label="Data de Nascimento" variant="standard" />
              </Box>
            </Box> */}


            <Box className="inputSearch" sx={{ '& > :not(style)': { m: 0.1 } }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Nome completo" variant="standard" />
              </Box>
            </Box>



            <input className='input-cadastro' type={'date'} placeholder='Data de Nascimento' />
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
    </div >
  )
}

export default Cadastro