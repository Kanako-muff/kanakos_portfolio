import React from "react";
import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaTwitter />
          </a>
          <a href="" className="footer__social-link">
            <FaDribbble />
          </a>
          <a href="" className="footer__social-link">
            <FaBehance />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
