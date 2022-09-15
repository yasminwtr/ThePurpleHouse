import React from "react";
export default function Card({ image, series, title, price, tag, time }) {
  return (
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
  );
}
