import React from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LeaveAvaliation from './Modal/LeaveAvaliation'

import StarIcon from '@mui/icons-material/StarRounded'
import EmailIcon from '@mui/icons-material/EmailRounded'
import PhoneIcon from '@mui/icons-material/LocalPhoneRounded'
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded'
import LocationIcon from '@mui/icons-material/LocationOnRounded'
import PriceIcon from '@mui/icons-material/SellRounded'
import DescriptionIcon from '@mui/icons-material/InfoRounded'

const WorkerProfile = () => {
    return(  
        <div className='all-worker-profile'>
            <div className='container-worker-profile'>
                <div className='part1-worker-profile'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-worker-profile' alt="Profile"/>
                    <p id='name-worker-profile'>Mario Silvo</p>
                    <p id='categorie-worker-profile'>Jardineiro, 25 anos</p>
                    <p id='stars-worker-profile'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
                    <button className='message-button'>Enviar mensagem</button>
                </div>

                <div className='part2-worker-profile'>
                        <p id='title-worker-profile'><EmailIcon sx={{ fontSize: 20 }}/> E-mail</p>
                        <p id='text-worker-profile'>mariosilva@gmail.com</p>

                        <p id='title-worker-profile'><PhoneIcon sx={{ fontSize: 22 }}/> Telefone</p>
                        <p id='text-worker-profile'>(48) 99160-1340</p>

                        <p id='title-worker-profile'><CalendarIcon sx={{ fontSize: 20 }}/> Data de nascimento</p>
                        <p id='text-worker-profile'>18/02/2004</p>

                        <p id='title-worker-profile'><LocationIcon sx={{ fontSize: 20 }}/> Localização</p>
                        <p id='text-worker-profile'>Florianópolis, Santa Catarina</p>

                        <p id='title-worker-profile'><PriceIcon sx={{ fontSize: 20 }}/> Preço médio dos serviços</p>
                        <p id='text-worker-profile'>R$ 40,97</p>

                        <p id='title-worker-profile'><DescriptionIcon sx={{ fontSize: 20 }}/> Descrição</p>
                        <p id='text-worker-profile'>Preparar, conservar e limpar jardins, compreendendo: capina, corte, replantio, adubação periódica, irrigação, varredura, pulverização simples e polvilhamento. Preparar as sementes. Fazer a repicagem e o transplante das mudas, incluindo desmate, transporte e embalagem. Atendo residências e comércios.</p>
                </div>
            </div>

            <div className='container-blocks'>
                <div className='gallery'>
                    <p id='title-blocks'>Galeria de serviços</p>

                    <section className='carousel' aria-label='Gallery'>
                        <ol className='carousel__viewport'>
                            <li id='carousel__slide1' tabIndex='0' className='carousel__slide'>
                                <div className='carousel__snapper'>
                                    <a href='#carousel__slide4' className='carousel__prev'>Go to last slide</a>
                                    <a href='#carousel__slide2' className='carousel__next'>Go to next slide</a>
                                </div>
                            </li>
                            
                            <li id='carousel__slide2' tabIndex='0' className='carousel__slide'>
                                <div className='carousel__snapper'></div>
                                <a href='#carousel__slide1' className='carousel__prev'>Go to previous slide</a>
                                <a href='#carousel__slide3' className='carousel__next'>Go to next slide</a>
                            </li>

                            <li id='carousel__slide3' tabIndex='0' className='carousel__slide'>
                                <div className='carousel__snapper'></div>
                                <a href='#carousel__slide2' className='carousel__prev'>Go to previous slide</a>
                                <a href='#carousel__slide4' className='carousel__next'>Go to next slide</a>
                            </li>

                            <li id='carousel__slide4' tabIndex='0' className='carousel__slide'>
                                <div className='carousel__snapper'></div>
                                <a href='#carousel__slide3' className='carousel__prev'>Go to previous slide</a>
                                <a href='#carousel__slide1' className='carousel__next'>Go to first slide</a>
                            </li>
                        </ol>

                        <aside className='carousel__navigation'>
                            <ol className='carousel__navigation-list'>
                                <li className='carousel__navigation-item'>
                                    <a href='#carousel__slide1' className='carousel__navigation-button'>Go to slide 1</a>
                                </li>

                                <li className='carousel__navigation-item'>
                                    <a href='#carousel__slide2' className='carousel__navigation-button'>Go to slide 2</a>
                                </li>

                                <li className='carousel__navigation-item'>
                                    <a href='#carousel__slide3' className='carousel__navigation-button'>Go to slide 3</a>
                                </li>

                                <li className='carousel__navigation-item'>
                                    <a href='#carousel__slide4' className='carousel__navigation-button'>Go to slide 4</a>
                                </li>
                            </ol>
                        </aside>
                    </section>
                </div>


                <div className='avaliations'>
                    <p id='title-blocks'>Avaliações</p>

                    <div className='feed-avaliations'>
                        <div className='inicial-avaliations'>
                            <LeaveAvaliation/> 
                            <p id='number-avaliations'>2 avaliações</p> 
                        </div>

                        <div>
                            <div className='block-avaliation'>
                                <div className='part1-avaliation'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile"/>
                                </div>

                                <div>
                                    <p id='name-avaliation'>Maria Silva</p>
                                    <p id='name-avaliation'>★★★★★</p>
                                </div>
                            </div>

                            <p id='text-avaliation'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                        </div>

                        <div>
                            <div className='block-avaliation'>
                                <div className='part1-avaliation'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile"/>
                                </div>

                                <div>
                                    <p id='name-avaliation'>Maria Silva</p>
                                    <p id='name-avaliation'>★★★★★</p>
                                </div>
                            </div>

                            <p id='text-avaliation'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                        </div>  

                        <div>
                            <div className='block-avaliation'>
                                <div className='part1-avaliation'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='icon-avaliation' alt="Profile"/>
                                </div>

                                <div>
                                    <p id='name-avaliation'>Maria Silva</p>
                                    <p id='name-avaliation'>★★★★★</p>
                                </div>
                            </div>

                            <p id='text-avaliation'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkerProfile;