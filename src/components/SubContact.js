import React from "react";
import { Link } from "react-router-dom";
import "../styles/subcontact.css";

import ig from "../icons/instagram2.svg";
import fb from "../icons/facebook2.svg";
import linkedin from "../icons/linkedin.svg";
import mail from "../icons/mail.svg";
import tsa from "../images/campus.jpg";

const SubContact = () => {
  return (
    <div className="sub-contact">
      <div className="container">
        <div className="card-wrapper">
          <div className="cardss">
            {/* 調icons外框 */}
            <div className="card">
              <div className="card-image">
                <img src={tsa} alt="profile" />
              </div>
              <ul className="social-icons">
                <li>
                  <Link
                    to="https://www.facebook.com/hkustsutsa"
                    target="_blank"
                  >
                    <img className="subcontact-icon" src={fb} alt="FB" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/hkustsu_tsa/"
                    target="_blank"
                  >
                    <img className="subcontact-icon" src={ig} alt="Instagram" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/82346632/admin/dashboard/"
                    target="_blank"
                  >
                    <img
                      className="subcontact-icon"
                      src={linkedin}
                      alt="LinkedIn"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="mailto:tsa.hkustsu@gmail.com" target="_blank">
                    <img className="subcontact-icon" src={mail} alt="gmail" />
                  </Link>
                </li>
              </ul>

              <div className="details ust-intro">
                <h2>
                  HKUSTSU TSA
                  <br />
                  <span className="ust-title">Contact Us!</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubContact;
