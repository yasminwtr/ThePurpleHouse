import React from "react";
import styled from "styled-components";

import landing from '../../assets/img/landing.png'
import eletricista from '../../assets/img/eletricistaicon.png'
import diarista from '../../assets/img/diarista.png'
import baba from '../../assets/img/baba.png'
import encontre from '../../assets/img/busca.png'
import escolha from '../../assets/img/selecao.png'
import negocie from '../../assets/img/chat.png'
import avaliacao from '../../assets/img/avaliacao.png'
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { servicesAnimations } from "../../animation";
import { useScroll } from "./useScroll";

import './styles.css'

function Home ()  {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Eletricista",
      text: "Implementação, manutenção e reparação deinstalações elétricas, tanto residenciais quanto industriais.",
      image: eletricista,
    },
    {
      type: "Diarista",
      text: "Limpeza, organização e higienização do ambiente. ",
      image: diarista,
    },
    {
      type: "Baba",
      text: "Cuida de bebês e crianças, zelando pelo bem-estar, saúde, alimentação, higiene pessoal, educação, cultura, recreação e lazer. ",
      image: baba,
    },
  ];

  return (
    <body className="bodyHome">
      <section className="container-Home">
        <div className="Quem-img">
          <img src={landing} alt='quemsomos' className="img-landingPage" />
        </div>
        <div className="Title-home">
          <h1 className="text-h1-home">Contrate prestadores para sua casa!</h1>
          <p> Você pode solicitar serviços e efetuar agendamentos diretamente com os profissionais. Crie sua conta, utilize nossas ferramentas e divulgue seu negócio!</p>
          
          <div> <label className="buttonHome-a"><Link to='/Registration' >COMEÇAR</Link></label></div>
         
        </div>
      </section>

      <section className="ServicesCards">
        <section className="ContainerTextServices">
          <div className="texts-ComoF">
            <h1 className="text-h1-ComoF">SERVIÇOS MAIS PEDIDOS</h1>
          </div>
        </section>

        <section id="services" ref={element} >
        <div className="services">
        {data.map(({type,text,image},index) => {
            return (
              <motion.div className="servicoscards"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "spring",
                duration: 0.7,
              }}
              >
                  <div className="services__service__image">
                    <img src={image} alt="Service"  />  
                  </div>
                  <div className="services__service__title">  
                    <h2 className="h5HomeCard">{type}</h2>
                  </div>
                  <div className="pra">
                  <p >{text}</p>
                  </div>
                 
              </motion.div>
            )
          })}
    </div>
    </section>

        
        <section className="ContainerButtonHomeS" id="services" ref={element}>
          {/* <button className="seeMoreButton"></button> */}
          <motion.div
           variants={servicesAnimations}
           animate={controls}
           transition={{
             delay: 0.3,
             type: "tween",
             duration: 0.5,
           }}
          > 
            <a  href="/Categories" className="buttonHome2-a"><Link to='/Categories'  className="buttonHome2-a">VER MAIS</Link></a>
          </motion.div>
        </section>
      </section>

      <section className="ContainerTextServices">
        <div className="texts-ComoF">
          <h1 className="text-h1-ComoF">COMO FUNCIONA?</h1>
          <p>A The Purple House é uma plataforma que facilita a conexão entre clientes
            e trabalhadores independentes, de diversas atividades.</p>
        </div>
      </section>

      <section className="serviceHome2">

        <div className="servicoscards2">
          <div className="boxHome2">
            <div className="cardS2">
              <img src={encontre} alt='encontre-icon' className="imgEletricista3" />
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
              <img src={escolha} alt='escolha-icon' className="imgEletricista2" />
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
              <img src={negocie} alt='negocie-icon' className="imgEletricista2" />
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
              <img src={avaliacao} alt='avaliacao-icon' className="imgEletricista2" />
              <h5 className="h5HomeCard2">AVALIE E AJUDE</h5>
              <div className="pra2">
                <p>Seu feedback faz toda a diferença! Ajude o profissional e outras pessoas a encontrarem a ajuda ideal</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </body>
  )
}

export default Home