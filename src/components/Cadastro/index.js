import React from 'react'
import './style.css'


function Cadastro() {
    return (
        <div className='container-cadastro'>
            <div className='box-cadastro'>
                <div>
                    <h1 className='h1-cadastro'>Crie sua conta!</h1>
                </div>
                <div className='form-cadastro'>
                    <input className='input-cadastro' type={'text'} placeholder='Nome completo' />
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
    )
}

export default Cadastro