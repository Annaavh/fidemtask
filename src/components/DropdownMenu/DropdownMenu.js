import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DropdownMenu.css";

function DropdownMenu({ isOpen, toggle }) {
  // console.log(isOpen,"from menu")
  return (
    <div
      onClick={toggle}
      className={
        isOpen
          ? "open"
          : "close"
      }
    >
      <div className="dropdown">
        <div style={{ borderBottom: "1px dotted #E2E2E2", padding: "20px 0" }}>
          <NavLink to="/">Home</NavLink>

        </div>
        <div style={{ borderBottom: "1px dotted #E2E2E2", padding: "20px 0" }}>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>
        <div style={{ borderBottom: "1px dotted #E2E2E2", padding: "20px 0" }}>
          <NavLink to="/rooms">Rooms</NavLink>
        </div>
        <div style={{ borderBottom: "1px dotted #E2E2E2", padding: "20px 0" }}>
          <NavLink to="/services">Services</NavLink>
        </div>
        <div style={{ borderBottom: "1px dotted #E2E2E2", padding: "20px 0" }}>
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
