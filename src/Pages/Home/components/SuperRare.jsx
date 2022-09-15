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
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">SERVIÇOS MAIS PEDIDOS</h2>
        
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image} className
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
