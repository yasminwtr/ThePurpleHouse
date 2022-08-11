import React from "react";

import landing from '../../assets/landing.png'
import eletricista from '../../assets/eletricistaicon.png'
import diarista from '../../assets/diarista.png'
import baba from '../../assets/baba.png'

import encontre from '../../assets/busca.png'
import escolha from '../../assets/selecao.png'
import negocie from '../../assets/chat.png'
import avaliacao from '../../assets/avaliacao.png'

import { Link } from "react-router-dom";


import './styles.css'
const Home =() =>{
    return (
        <>
<section className="QuemS">
<div className="Quem-img">
                <img src={landing} alt='quemsomos' className="imgQuemS"/>
            </div>
            <div className="Quem-text">
                <h1 className="text-h1">Contrate prestadores para sua casa!</h1>
                <p> Você pode solicitar serviços e efetuar agendamentos diretamente com os profissionais. Crie sua conta, utilize nossas ferramentas e divulgue seu negócio!</p>
                <a href="/Cadastro" className="buttonHome"><Link to='/Cadastro'>COMEÇAR</Link></a>
            </div>
</section>
    


<section className="ServicesCards">
        <section className="ContainerTextServices">
            <div className="texts-ComoF">
            <h1 className="text-h1-ComoF">SERVIÇOS MAIS PEDIDOS</h1>
            </div>
        </section>
        
    <div className="serviceHome">

        <div className="servicoscards">
            <div className="boxHome">
                <div className="cardS">
                    <h5 className="h5HomeCard">Eletricista</h5>
                    <img src={eletricista} alt='eletricista-icon' className="imgEletricista"/>
                    <div className="pra">
                        <p>Implementação, manutenção e reparação deinstalações elétricas, tanto residenciais quanto industriais.</p>
                    </div>
                </div>

            </div>
        </div>


    <div className="servicoscards">
        <div className="boxHome">
            <div className="cardS">
                <h5 className="h5HomeCard">Diarista</h5>
                <img src={diarista} alt='diarista-icon' className="imgEletricista"/>
                <div className="pra">
                    <p>Limpeza, organização e higienização do ambiente. </p>
                </div>
            </div>

        </div>
     </div>
    <div className="servicoscards">
        <div className="boxHome">
            <div className="cardS">
                <h5 className="h5HomeCard">Babá</h5>
                <img src={baba} alt='baba-icon' className="imgEletricista"/>
                <div className="pra">
                    <p>Cuida de bebês e crianças, zelando pelo bem-estar, saúde, alimentação, higiene pessoal, educação, cultura, recreação e lazer. </p>
                </div>
            </div>

        </div>
     </div>
    </div>
        <section className="ContainerButtonHomeS">
            <button className="seeMoreButton">VER MAIS</button>
        </section>
    </section>  


        
        <section className="ContainerTextServices">
            <div className="texts-ComoF">
            <h1 className="text-h1-ComoF">COMO FUNCIONA?</h1>
                <p>A S|R é uma plataforma que facilita a conexão entre clientes
                    e trabalhadores indepentes, de diversas atividades.</p>
            </div>
        </section>

    <section className="serviceHome2">

        <div className="servicoscards2">
            <div className="boxHome2">
                <div className="cardS2">
                    <img src={encontre} alt='encontre-icon' className="imgEletricista2"/>
                    <h5 className="h5HomeCard2">ENCONTRE</h5>
                    <div className="pra2">
                        <p>Selecione a atividade desejada, indique uma região de atendimento e tenha acesso à inúmeros profissionais</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="servicoscards2">
            <div className="boxHome2">
                <div className="cardS2">
                    <img src={escolha} alt='escolha-icon' className="imgEletricista2"/>
                    <h5 className="h5HomeCard2">ESCOLHA</h5>
                    <div className="pra2">
                        <p>Filtros por avaliação, tempo de experiência e distância permitem a escolha do profissional ideal</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="servicoscards2">
            <div className="boxHome2">
                <div className="cardS2">
                    <img src={negocie} alt='negocie-icon' className="imgEletricista2"/>
                    <h5 className="h5HomeCard2">NEGOCIE</h5>
                    <div className="pra2">
                        <p>Fale direto com o profissional para combinar orçamentos e o melhor horário para o atendimento</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="servicoscards2">
            <div className="boxHome2">
                <div className="cardS2">
                    <img src={avaliacao} alt='avaliacao-icon' className="imgEletricista2"/>
                    <h5 className="h5HomeCard2">AVALIE E AJUDE</h5>
                    <div className="pra2">
                        <p>Seu feedback faz toda a diferença! Ajude o profissional e outras pessoas a encontrarem a ajuda ideal</p>
                    </div>
                </div>

            </div>
        </div>


    
    
    
    </section>
      
        
        </>
    )
}

export default Home