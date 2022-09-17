import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";

export default function SuperRare() {
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
  return (
    <>
      <div className="title-container">
        <h2 className="title">SERVIÇOS MAIS PEDIDOS</h2> 
      </div>

    <div className="super-rare">
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (

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
    </>
  );
}
