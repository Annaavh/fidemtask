import React from "react";
import facebook from "../../assets/images/Vector.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a target="_blank" href="https://www.facebook.com/">
          <img src={facebook} />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={twitter} />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src={instagram} />
        </a>
      </div>
      <div className="social-div">
        <div className="social-links">
          <Link to="/">About Us</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Terms Of Use</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
        <div className="social-icons1">
          <a target="_blank" href="https://www.facebook.com/">
            <img src={facebook} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitter} />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={instagram} />
          </a>
        </div>
      </div>
      <div className="footer-text">
        <p>© 2022 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
