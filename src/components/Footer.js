import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import fb from "../icons/facebook.svg";
import ig from "../icons/instagram.svg";
import linkedin from "../icons/linkedin_footer.svg";
import mail from "../icons/mail_footer.svg";

import logo from "../images/TSA_11th_email_signature.svg";

// const footer = {
//   color: "#1b3663",
//   backgroundColor: "#1b3663",
//   width: "100%",
// };

const Footer = () => {
  return (
    <footer className="desktop">
      <div className="content-locator clearfix">
        <div className="site-cal">
          <section className="footer-logo">
            <img className="hkust-footer-logo" src={logo} alt="logo" />
          </section>
          <section className="footer-link">
            <ul class="link-lists">
              <li>
                <Link to="/about">About Us </Link>
              </li>
              <li>
                <Link to="/usefulinformation">Useful Information </Link>
              </li>
              <li>
                <Link to="/usefulinformation/freshmen">Freshmen</Link>
              </li>
              <li>
                <Link to="/usefulinformation/usefullink">Useful Links</Link>
              </li>
            </ul>
            <p className="copyright">
              Copyright © 2024 HKUST TSA. All rights reserved.
            </p>
          </section>
        </div>
        <div className="social-share-col">
          <div className="text">Follow and contact HKUST TSA on</div>
          <div className="social-share">
            <Link
              className="icon"
              to="https://www.facebook.com/hkustsutsa"
              target="_blank"
            >
              <img src={fb} alt="FB" />
            </Link>
            <Link
              className="icon"
              to="https://www.instagram.com/hkustsu_tsa/"
              target="_blank"
            >
              <img src={ig} alt="IG" />
            </Link>
            <Link
              className="icon"
              to="https://www.linkedin.com/company/82346632/admin/dashboard/"
              target="_blank"
            >
              <img src={linkedin} alt="LinkedIn" />
            </Link>
            <Link
              className="icon"
              to="mailto:tsa.hkustsu@gmail.com"
              target="_blank"
            >
              <img src={mail} alt="gmail" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
