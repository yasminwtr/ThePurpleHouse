import React from "react";
import home from "../assets/landing.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="container">

      <div className="image-container">
          <div className="image">
            <img src={home} alt="home image"   />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
      </div>

        <div className="content">
          {/* <p className="sub-title">Contrate prestadores para sua casa!</p> */}
          <h1 className="title">Contrate prestadores para sua casa!</h1>
          <p className="description">
          Você pode solicitar serviços e efetuar agendamentos diretamente com os profissionais. 
          Crie sua conta, utilize nossas ferramentas e divulgue seu negócio!
          </p>
          <div> <label className="buttonHome-a"><Link to='/Registration' >COMEÇAR</Link></label></div>
        </div>
       
      </div>
    </div>
  );
}
