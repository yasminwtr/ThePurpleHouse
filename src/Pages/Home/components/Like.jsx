import React from "react";
import encontre from "../assets/busca.png";
import escolha from "../assets/selecao.png";
import negocie from "../assets/chat.png";
import avaliacao from "../assets/avaliacao.png";


export default function Like() {
  return (
    <div className="like">
      <div className="release green">
       <div className="texts-ComoF">
            <h1 className="title-1">COMO FUNCIONA?</h1>
            <p className="description-1">A The Purple House é uma plataforma que facilita a conexão entre clientes
              e trabalhadores independentes, de diversas atividades.</p>
          </div>

      <div className="container">
        <div className="content">
          <div className="image">
            <img src={encontre} alt="encontre" width={'80px'}/>
          </div>
          <h2 className="title">ENCONTRE</h2>
          <p className="description">
          Selecione a atividade desejada, indique uma região de atendimento e tenha acesso
           à inúmeros profissionais
          </p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={escolha} alt="escolha"  width={'80px'} />
          </div>
          <h2 className="title">ESCOLHA</h2>
          <p className="description">
          Filtros por avaliação, tempo de experiência e distância permitem a escolha do profissional ideal
          </p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={negocie} alt="negocie"  width={'80px'}/>
          </div>
          <h2 className="title">NEGOCIE</h2>
          <p className="description">
          Fale direto com o profissional para combinar orçamentos e o melhor horário para o atendimento
          </p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={avaliacao} alt="avaliacao"  width={'80px'}/>
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
  );
}
