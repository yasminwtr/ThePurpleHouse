import React, { useState, useEffect } from "react";
import home from "../assets/img/landing.png";
import super1 from "../assets/img/super1.png";
import super2 from "../assets/img/super2.png";
import super3 from "../assets/img/super3.png";
import encontre from "../assets/img/busca.png";
import escolha from "../assets/img/selecao.png";
import negocie from "../assets/img/chat.png";
import avaliacao from "../assets/img/avaliacao.png";
import { Link } from "react-router-dom";
import scrollreveal from "scrollreveal";
import '../sass/main.scss'

export default function Home() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .title-container,
        .super-rare,
        .like,
        .signup
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  // ------------------------------- Section 3 ------------------------------------
  const data = [
    {
      image: super1,
      title: "ELETRICISTA",
      series: "Implementação, manutenção e reparação de instalações elétricas.",

    },
    {
      image: super2,
      title: "DIARISTA",
      series: "Limpeza, organização e higienização do ambiente.",

    },
    {
      image: super3,
      title: "BABÁ",
      series: "Cuida de bebês e crianças, zelando pelo bem-estar, saúde, alimentação, higiene pessoal, educação, cultura, recreação e lazer.",
      price: 2.99,
      tag: 12983,
      time: 1,
    },

  ];
  // ------------------------------------------------------------------------------
  return (
    <>
      {/* ______________________________ Home ________________________________ */}

      <div className="home">
        <div className="container-home">

          <div className="image-container">
            <div className="image">
              <img src={home} alt="home image" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse pink"></div>
              <div className="ellipse orange"></div>
            </div>
          </div>

          <div className="content">
            <h1 className="title">Contrate prestadores para sua casa!</h1>
            <p className="description">
              Você pode solicitar serviços e efetuar agendamentos diretamente com os profissionais.
              Crie sua conta, utilize nossas ferramentas e divulgue seu negócio!
            </p>
            <div> <label className="buttonHome-a"><Link to='/Registration' >COMEÇAR</Link></label></div>
          </div>

        </div>
      </div>
      {/* _____________________________ Section 2 _____________________________ */}

      <div className="title-container">
        <h2 className="title">SERVIÇOS MAIS PEDIDOS</h2>
      </div>

      <div className="super-rare">
        <div className="cards">
          {data.map(({ image, series, title }) => (

            <div className="card">
              <div className="card-image">
                <img src={image} alt="super1" />
              </div>

              <div className="card-content">
                <div className="card-details">
                  <h4 className="card-title">{title}</h4>
                </div>

                <div className="card-heading">
                  <span className="card-series">{series}</span>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>

      {/* _____________________________ Section 3 _____________________________ */}
      <div className="like">
        <div className="release green">
          <div className="texts-ComoF">
            <h1 className="title-1">COMO FUNCIONA?</h1>
            <p className="description-1">A The Purple House é uma plataforma que facilita a conexão entre clientes
              e trabalhadores independentes, de diversas atividades.</p>
          </div>

          <div className="container-Comof">
            <div className="content">
              <div className="image">
                <img src={encontre} alt="encontre" width={'80px'} />
              </div>
              <h2 className="title">ENCONTRE</h2>
              <p className="description">
                Selecione a atividade desejada, indique uma região de atendimento e tenha acesso
                à inúmeros profissionais
              </p>

            </div>
            <div className="content">
              <div className="image">
                <img src={escolha} alt="escolha" width={'80px'} />
              </div>
              <h2 className="title">ESCOLHA</h2>
              <p className="description">
                Filtros por avaliação, tempo de experiência e distância permitem a escolha do profissional ideal
              </p>

            </div>
            <div className="content">
              <div className="image">
                <img src={negocie} alt="negocie" width={'80px'} />
              </div>
              <h2 className="title">NEGOCIE</h2>
              <p className="description">
                Fale direto com o profissional para combinar orçamentos e o melhor horário para o atendimento
              </p>

            </div>
            <div className="content">
              <div className="image">
                <img src={avaliacao} alt="avaliacao" width={'80px'} />
              </div>
              <h2 className="title">AVALIE E AJUDE</h2>
              <p className="description">
                Seu feedback faz toda a diferença! Ajude o profissional e outras pessoas a
                encontrarem a ajuda ideal
              </p>

            </div>
          </div>
        </div>
      </div>
      {/* _____________________________________________________________________ */}
    </>
  );
}
