import React from "react";
import "./Card.css";
import cart from "../../assets/images/pizzas/cart.png";

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-top">
        <img src={item} />
      </div>
      <div className="card-content">
        <div className="card-text">
          <p>Facilisi ac</p>
          <p>Platea nunc cum amet odio lectus. Cras ut sem aliquet in.</p>
        </div>
        <div className="price-img">
          <div className="price">$60.00</div>
          <img src={cart} />
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Card;
