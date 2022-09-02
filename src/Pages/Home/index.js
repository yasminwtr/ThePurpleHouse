import React from "react";

import landing from '../../components/assets/img/landing.png'
import eletricista from '../../components/assets/img/eletricistaicon.png'
import diarista from '../../components/assets/img/diarista.png'
import baba from '../../components/assets/img/baba.png'
import encontre from '../../components/assets/img/busca.png'
import escolha from '../../components/assets/img/selecao.png'
import negocie from '../../components/assets/img/chat.png'
import avaliacao from '../../components/assets/img/avaliacao.png'
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { servicesAnimations } from "./animation";
import { servicesAnimations2 } from "./animation";
import { milestonesAnimations } from "./animation";

import { useScroll } from "./useScroll";

import './styles.css'

const Home = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  const data = [
    {
      type: "Eletricista",
      text: "Implementação, manutenção e reparação de instalações elétricas, tanto residenciais quanto industriais.",
      image: eletricista,
    },
    {
      type: "Diarista",
      text: "Limpeza, organização e higienização do ambiente. ",
      image: diarista,
    },
    {
      type: "Babá",
      text: "Cuida de bebês e crianças, zelando pelo bem-estar, saúde, alimentação, higiene pessoal, educação, cultura, recreação e lazer. ",
      image: baba,
    },
  ];

  const milestone = [
    {
      image2: encontre,
      data: "Selecione a atividade desejada, indique uma região de atendimento e tenha acesso à inúmeros profissionais",
      amount: "ENCONTRE",
    },
    {
      image2: escolha,
      data: "Filtros por avaliação, tempo de experiência e distância permitem a escolha do profissional ideal",
      amount: "ESCOLHA",
    },
    {
      image2: negocie,
      data: "Fale direto com o profissional para combinar orçamentos e o melhor horário para o atendimento",
      amount: "NEGOCIE",
    },
    {
      image2: avaliacao,
      data: "Seu feedback faz toda a diferença! Ajude o profissional e outras pessoas a encontrarem a ajuda ideal",
      amount: "AVALIE E AJUDE ",
    },
]

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

        <section id="services" ref={element} className="serviceHome">
        <div className="services">
        {data.map(({type,text,image},index) => {
            return (
              <motion.div className="servicoscards"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.00,
                type: "spring",
                duration: 0.5,
              }}
              >
                <div className="services__service__title">  
                    <h2 className="h5HomeCard">{type}</h2>
                  </div>
                  <div className="services__service__image">
                    <img src={image} alt="Service" className="imgEletricista" />  
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
           variants={servicesAnimations2}
           animate={controls}
           transition={{
             delay: 0.3,
             type: "spring",
             duration: 0.5,
           }}
          > 
            <a  href="/Login" className="buttonHome2-a"><Link to='/Login'  className="buttonHome2-a">VER MAIS</Link></a>
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

      <section ref={element2}  className="serviceHome2">
      <div className="milestones">
      {
        milestone.map(({ image2, data, amount }) => {
          return (
            <motion.div className="milestone"
            variants={milestonesAnimations}
            animate={controls2}
            transition={{
              delay: 0.03,
              type: "just",
              duration: 0.8,
            }}
            >
              <img src={image2} alt="Milestone"  className="imgEletricista2" />
              <p className="h5HomeCard2">{amount}</p>
              <div className="pra2"> 
                <p>{data}</p>
              </div>
               
            </motion.div>
          );
        })
      }  
    </div>

      </section>

      
    </body>
  )
}

export default Home