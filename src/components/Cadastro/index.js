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
                            {/* <i><FaUser className='i-cadastro'/></i> */}
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