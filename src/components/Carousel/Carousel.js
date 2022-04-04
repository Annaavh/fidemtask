import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1forcarousel from "../../assets/images/img1forcarousel.jpg";

function CarouselComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "68px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slider-div">
          <p className="slider-p1">Stay with us feel like home</p>
          <p className="slider-p2">
            Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
            faucibus netus tristique integer ultrices.
          </p>
          <img src={img1forcarousel} />
        </div>
        <div  className="slider-div">
          <p className="slider-p1">Stay with us feel like home</p>
          <p className="slider-p2">
            Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
            faucibus netus tristique integer ultrices.
          </p>
          <img src={img1forcarousel} />
        </div>
        <div  className="slider-div">
          <p className="slider-p1">Stay with us feel like home</p>
          <p className="slider-p2">
            Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
            faucibus netus tristique integer ultrices.
          </p>
          <img src={img1forcarousel} />
        </div>
        <div  className="slider-div">
          <p className="slider-p1">Stay with us feel like home</p>
          <p className="slider-p2">
            Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
            faucibus netus tristique integer ultrices.
          </p>
          <img src={img1forcarousel} />
        </div>
        <div  className="slider-div">
          <p className="slider-p1">Stay with us feel like home</p>
          <p className="slider-p2">
            Leo malesuada porta ultricies vel fusce. Faucibus nulla vitae
            faucibus netus tristique integer ultrices.
          </p>
          <img src={img1forcarousel} />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComp;
