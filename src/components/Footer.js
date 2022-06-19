import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/Dougsworth">
          <FontAwesomeIcon icon={faGithub} className="footerIcons-G" />
        </a>
        <a href="https://www.linkedin.com/in/douglasbyfield/">
          <FontAwesomeIcon icon={faLinkedin} className="footerIcons-L" />
        </a>
        <a href="https://paypal.me/thanksu515?country.x=JM&locale.x=en_US">
          <FontAwesomeIcon icon={faCcPaypal} className="footerIcons-P" />
        </a>
      </div>
      <p>Douglas Byfield © {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
