import React from "react";
import "./Home.css";
import CarouselComp from "../../components/Carousel/Carousel";
import img1 from "../../assets/images/gallery/img1.jpg";
import img2 from "../../assets/images/gallery/img2.jpg";
import img3 from "../../assets/images/gallery/img3.jpg";
import img4 from "../../assets/images/gallery/img4.jpg";
import img5 from "../../assets/images/gallery/img5.jpg";
import img6 from "../../assets/images/gallery/img6.jpg";
import img_1 from "../../assets/images/services/img_1.jpg";
import img_2 from "../../assets/images/services/img_2.jpg";
import img_3 from "../../assets/images/services/img_3.jpg";
import img_4 from "../../assets/images/services/img_4.jpg";
import img_5 from "../../assets/images/services/img_5.jpg";
import img_6 from "../../assets/images/services/img_6.jpg";
import Check from "../../components/Check/Check";

const gallery = [
  { img: img1, type: "Standart" },
  { img: img2, type: "Deluxe" },
  { img: img3, type: "Family" },
  { img: img4, type: "Shale" },
  { img: img5, type: "Vestibulum" },
  { img: img6, type: "Suspendisse" },
];
const services = [
  { img: img_1, type: "" },
  { img: img_2, type: "Spa Programs" },
  { img: img_3, type: "Gym" },
  { img: img_4, type: "Tours" },
  { img: img_5, type: "Bike Rental" },
  { img: img_6, type: "Taxi" },
];
function Home() {
  return (
    <div className="home">
      <div className="relative">
        <CarouselComp />
        <Check />
      </div>
      <section className="gallery">
        <div className="gallery-text">Gallery</div>
        <div className="card-wrapper">
          {gallery.map((item) => (
            <div key={item.type} className="gallery-card">
              <img src={item.img} />
            </div>
          ))}
        </div>
        <a href="#">See All</a>
      </section>
      <section className="gallery">
        <div className="gallery-text">Rooms</div>
        <div className="card-wrapper">
          {gallery.map((item) => (
            <div key={item.type} className="gallery-card">
              <img src={item.img} />
              <span className="card-type">{item.type}</span>
            </div>
          ))}
        </div>
        <a href="#">See All</a>
      </section>
      <section className="gallery">
        <div className="service-text">Services</div>
        <div className="card-wrapper">
          {services.map((item,index) => (
            <div key={index} className="gallery-card">
              <img src={item.img} />
            </div>
          ))}
        </div>
        <a href="#">See All</a>
      </section>
    </div>
  );
}

export default Home;
