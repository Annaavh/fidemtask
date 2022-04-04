import React from "react";
import "./Services.css";
import img1 from "../../assets/images/servicesPage/img1.jpg";
import img2 from "../../assets/images/servicesPage/img2.jpg";
import img3 from "../../assets/images/servicesPage/img3.jpg";
import img4 from "../../assets/images/servicesPage/img4.jpg";
import img5 from "../../assets/images/servicesPage/img5.jpg";
import img6 from "../../assets/images/servicesPage/img6.jpg";
import img7 from "../../assets/images/servicesPage/img7.jpg";
import img8 from "../../assets/images/servicesPage/img8.jpg";
import img9 from "../../assets/images/servicesPage/img9.jpg";
import img10 from "../../assets/images/servicesPage/img10.jpg";
import img11 from "../../assets/images/servicesPage/img11.jpg";
import img12 from "../../assets/images/servicesPage/img12.jpg";
import img13 from "../../assets/images/servicesPage/img13.jpg";
import img14 from "../../assets/images/servicesPage/img14.jpg";
import img15 from "../../assets/images/servicesPage/img15.jpg";
import { Link } from "react-router-dom";

const services = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img9 },
  { img: img10 },
  { img: img11 },
  { img: img12 },
  { img: img13 },
  { img: img14 },
  { img: img15 },
];
function Services() {
  return (
    <div className="services">
      {services.map((item,index) => (
        <div key={index} className="services-div">
          <Link to="/services/:1">
            <img src={item.img} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Services;
