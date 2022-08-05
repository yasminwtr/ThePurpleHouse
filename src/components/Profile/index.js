import React from 'react';
import './styles.css'
import email from './email.png'

const Profile = () => {
    return(
        <div className='allProfile'>
            <div className='containerProfile'>
                <div className='part1Profile'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='iconProfile' alt="Profile"/>
                    <p id='nameProfile'>Mario Silvo</p>
                </div>

                <div className='part2Profile'>
                    <div className='info1Profile'>
                        <img src={email} alt="emailIcon" id='iconsProfile'/><p id='titleProfile'>E-mail</p>
                        <p id='textProfile'>mariosilva@gmail.com</p>

                        <p id='titleProfile'>Telefone</p>
                        <p id='textProfile'>(48) 99160-1340</p>

                        <p id='titleProfile'>Data de nascimento</p>
                        <p id='textProfile'>18/02/2004</p>
                    </div>

                    <div className='info2Profile'>
                        <p id='serviceTitleProfile'>Serviços anunciados</p>
                        <p id='serviceTextProfile'>Jardineiro</p>
                    </div>
                </div>
            </div>

            <div className='containerConfig'>
                <div className='optionsConfig'>
                    <p id='optionsTitle'>Configurações</p>
                    <p id='optionsText'>Editar conta</p>
                    <p id='optionsText'>Excluir conta</p>
                </div>

                <div className='optionsConfig'>
                    <p id='optionsTitle'>Serviços</p>
                    <p id='optionsText'>Serviços avaliados</p>
                    <p id='optionsText'>Anunciar um serviço</p>
                    <p id='optionsText'>Cancelar serviço</p>
                </div>

                <p id='optionsLogout'>Sair</p>
            </div>
        </div>
    )
}

export default Profile;