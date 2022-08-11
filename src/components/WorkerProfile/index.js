import React from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import StarIcon from '@mui/icons-material/StarRounded'
import EmailIcon from '@mui/icons-material/EmailRounded'
import PhoneIcon from '@mui/icons-material/LocalPhoneRounded'
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded'
import LocationIcon from '@mui/icons-material/LocationOnRounded'
import PriceIcon from '@mui/icons-material/SellRounded'
import DescriptionIcon from '@mui/icons-material/InfoRounded'

const WorkerProfile = () => {
    return(  
        <div className='allWorkerProfile'>
            <div className='containerWorkerProfile'>
                <div className='part1WorkerProfile'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='iconWorkerProfile' alt="Profile"/>
                    <p id='nameWorkerProfile'>Mario Silvo</p>
                    <p id='categorieWorkerProfile'>Jardineiro, 25 anos</p>
                    <p id='starsWorkerProfile'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
                    <button className='messageButton'>Enviar mensagem</button>
                </div>

                <div className='part2WorkerProfile'>
                        <p id='titleWorkerProfile'><EmailIcon sx={{ fontSize: 20 }}/> E-mail</p>
                        <p id='textWorkerProfile'>mariosilva@gmail.com</p>

                        <p id='titleWorkerProfile'><PhoneIcon sx={{ fontSize: 22 }}/> Telefone</p>
                        <p id='textWorkerProfile'>(48) 99160-1340</p>

                        <p id='titleWorkerProfile'><CalendarIcon sx={{ fontSize: 20 }}/> Data de nascimento</p>
                        <p id='textWorkerProfile'>18/02/2004</p>

                        <p id='titleWorkerProfile'><LocationIcon sx={{ fontSize: 20 }}/> Localização</p>
                        <p id='textWorkerProfile'>Florianópolis, Santa Catarina</p>

                        <p id='titleWorkerProfile'><PriceIcon sx={{ fontSize: 20 }}/> Preço médio dos serviços</p>
                        <p id='textWorkerProfile'>R$ 40,97</p>

                        <p id='titleWorkerProfile'><DescriptionIcon sx={{ fontSize: 20 }}/> Descrição</p>
                        <p id='textWorkerProfile'>Preparar, conservar e limpar jardins, compreendendo: capina, corte, replantio, adubação periódica, irrigação, varredura, pulverização simples e polvilhamento. Preparar as sementes. Fazer a repicagem e o transplante das mudas, incluindo desmate, transporte e embalagem. Atendo residências e comércios.</p>
                </div>
            </div>

            <div className='containerBlocks'>
                <div className='gallery'>
                    <p id='titleBlocks'>Galeria de serviços</p>

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
                    <p id='titleBlocks'>Avaliações</p>

                    <div className='feedAvaliations'>
                        <p id='numberAvaliations'>2 avaliações</p> 

                        <div>
                            <div className='blockAvaliation'>
                                <div className='part1Avaliation'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='iconAvaliation' alt="Profile"/>
                                </div>

                                <div>
                                    <p id='nameAvaliation'>Maria Silva</p>
                                    <p id='nameAvaliation'>★★★★★</p>
                                </div>
                            </div>

                            <p id='textAvaliation'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                        </div>

                        <div>
                            <div className='blockAvaliation'>
                                <div className='part1Avaliation'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='iconAvaliation' alt="Profile"/>
                                </div>

                                <div>
                                    <p id='nameAvaliation'>Maria Silva</p>
                                    <p id='nameAvaliation'>★★★★★</p>
                                </div>
                            </div>

                            <p id='textAvaliation'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                        </div>  

                        <div>
                            <div className='blockAvaliation'>
                                <div className='part1Avaliation'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='iconAvaliation' alt="Profile"/>
                                </div>

                                <div>
                                    <p id='nameAvaliation'>Maria Silva</p>
                                    <p id='nameAvaliation'>★★★★★</p>
                                </div>
                            </div>

                            <p id='textAvaliation'>Adorei, podou minhas árvores do jeito que eu pedi e muito bem educado.</p>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkerProfile;