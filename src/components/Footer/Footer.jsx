import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Team</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
      </div>
      <div className="footer-icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faDribbble} />
      </div>

      <div className="footer-copy">
        © 2021 SomeCompany, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
