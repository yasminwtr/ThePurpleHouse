import React from 'react'
import './style.css'

function Cadastro() {
    return (
        <div className='container-cadastro'>

            <div className='logo'>

            </div>

            <div className='box'>
                <h1>Crie sua conta!</h1>
                <input type={'text'} placeholder='Nome completo' />
                <input type={'email'} placeholder='E-mail' />
                <input type={'tel'} placeholder='Numero Celular' />
                <input type={'date'} placeholder='Data de Nascimento' />
                <input type={'password'} placeholder='Senha' />
                <button>Entrar</button>
                <label>Já possui uma conta?</label>
                <a href=''>Entre</a>
            </div>

        </div>
    )
}

export default Cadastro