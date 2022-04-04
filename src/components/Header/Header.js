import React from "react";
import logo from "../../assets/images/LO GO.png";
import vector from "../../assets/images/Vector.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import menu from "../../assets/images/menu.png"
import en from "../../assets/images/EN.png"

function Header({toggle}) {

  
  return (
    <>
    <div className="header">
      <div className="logo-pages">
        <div onClick={toggle} className="burger-menu-icon">
          <img src={menu} />
        </div>
        <div className="header-logo ">
          <img src={logo} />
        </div>
        <div className="header-language">
          <img src={en}/>
        </div>
        <div className="header-pages">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/rooms">Rooms</NavLink>
        </div>
      </div>
      <div className="header-cart">
        <img className="" src={vector} />
        <span className="">Cart</span>
      </div>
    </div>
    
    </>
  );
}

export default Header;
