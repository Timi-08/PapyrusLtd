import React from "react";

const Card = ({ img, title, price, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={`/${img}`} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p className="price">{price}</p>
    </div>
  );
};

export default Card;
