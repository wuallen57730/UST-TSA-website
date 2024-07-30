import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/homePage.css";
import photo from "../images/vbg-cv-08.jpg";
import circle from "../images/circle.jpg";
import circleAboutus from "../images/profile_pic.svg";
import circleUsefulInformation from "../images/useful_photo.jpg";
import circleFreshmen from "../images/freshmen.jpg";
import circleLinks from "../images/turkey.jpg";

const animatedTitle = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homePage">
      <section className="home-empty-container">
        <motion.h3 variants={animatedTitle} initial="initial" animate="final">
          香港科技大學臺灣學生會
          <br />
          Hong Kong Unversity of Technology and Science <br />
          Taiwanese Student Association
        </motion.h3>
        <img src={photo} alt="fixed-image" className="fixed-image" />
      </section>
      <section className="about-website">
        <h2>About This Website</h2>
        {/* <hr /> */}
        <p>
          我們是由在香港科大就讀的臺灣學生組成的團體
          <br />
          這個網站主要是希望可以提供來科大念書的台灣留學生實用資訊。
          <br />
          此外也希望能讓更多臺灣學生認識香港科技大學。
          <br />
          如果內容有什麼疏漏，歡迎聯繫我們
        </p>
      </section>

      <section className="info-circles">
        <h3>Guide</h3>
        <div className="circles">
          <div className="circle">
            <Link to="./about">
              <img title="About Us" src={circleAboutus} alt="about-us" />
            </Link>
            <p>About Us</p>
          </div>
          <div className="circle">
            <Link to="./usefulinformation">
              <img
                title="Useful Information"
                src={circleUsefulInformation}
                alt="Useful Information"
              />
            </Link>
            <p>Useful Information</p>
          </div>
          {/* <div className="circle">
            <Link to="./usefulinformation/tour">
              <img title="Tour" src={circle} alt="Tour" />
            </Link>
            <p>Tour</p>
          </div> */}
          <div className="circle">
            <Link to="./usefulinformation/freshmen">
              <img title="Freshmen" src={circleFreshmen} alt="Freshmen" />
            </Link>
            <p>Freshmen</p>
          </div>
          <div className="circle">
            <Link to="./usefulinformation/usefullink">
              <img title="Useful Links" src={circleLinks} alt="Useful Links" />
            </Link>
            <p>Useful Links</p>
          </div>
        </div>
      </section>
    </div>
  );
}
