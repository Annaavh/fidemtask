import React from "react";
import Card from "../../components/Card/Card";
import "./Info.css";
import img1 from "../../assets/images/pizzas/img1.png";
import img2 from "../../assets/images/pizzas/img2.png";
import img4 from "../../assets/images/pizzas/img4.png";
import img5 from "../../assets/images/pizzas/img5.png";
import img6 from "../../assets/images/pizzas/img6.png";
import img7 from "../../assets/images/pizzas/img7.png";
import img11 from "../../assets/images/pizzas/img11.png";
import img12 from "../../assets/images/pizzas/img12.png";
import img10 from "../../assets/images/pizzas/img10.png";
import img_1 from "../../assets/images/soups/img1.png";
import img_2 from "../../assets/images/soups/img2.png";
import img_3 from "../../assets/images/soups/img3.png";
import img_4 from "../../assets/images/soups/img4.png";
import img_5 from "../../assets/images/soups/img5.png";
import img_6 from "../../assets/images/soups/img6.png";

const pizzas = [
  { img: img1 },
  { img: img2 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img10 },
  { img: img11 },
  { img: img12 },
];

const soups = [
  { img: img_1 },
  { img: img_2 },
  { img: img_3 },
  { img: img_4 },
  { img: img_5 },
  { img: img_6 },
];

const dishes = [
  { name: "Pizza", active: true },
  { name: "Soups", active: false },
  { name: "Main Dishes", active: false },
  { name: "Salads", active: false },
  { name: "Dessert", active: false },
  { name: "For Kids", active: false },
  { name: "Pizza", active: false },
  { name: "Soups", active: false },
  { name: "Main Dishes", active: false },
  { name: "Salads", active: false },
  { name: "Dessert", active: false },
  { name: "For Kids", active: false },
  { name: "Main Dishes", active: false },
];
function Info() {
  
  return (
    <>
      <div className="dishes">
        {dishes.map((item,index) => (
          <button key={index} className={item.active ? "active" : ""}>{item.name}</button>
        ))}
      </div>
      <section className="pizza">
        <div className="pizza-title">Pizza</div>
        <div className="pizza-content">
          {pizzas.map((item,index) => (
            <Card key={index} item={item.img} />
          ))}
        </div>
      </section>

      <section className="soup">
        <div className="soups-title">Soups</div>
        <div className="pizza-content">
          {soups.map((item,index) => (
            <Card key={index} item={item.img} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Info;
