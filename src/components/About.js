import React, { useEffect } from "react";
import { motion as m } from "framer-motion";

import "../styles/about.css";
import Cards from "../components/Cards";
import Cards2 from "../components/Cards2";
import Contact from "../components/Contact";

import photo from "../images/turkey.jpg";
import aboutUs from "../images/profile_pic.svg";

const mapStyle = {
  width: "600",
  height: "450",
  style: "border: 0",
  allowfullscreen: "",
  loading: "lazy",
  referrerpolicy: "no-referrer-when-downgrade",
};
const About = () => {
  //Back to top，避免router跳轉後跳到不同route但相同位置
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="empty-container">
        <h3>About Us</h3>
      </section>

      <section className="about-us">
        <section className="about-us-photo">
          <m.img
            className="aboutUsPhoto"
            src={aboutUs}
            alt="about us"
            initial={{ scale: 0.8, borderRadius: "100%" }}
            whileHover={{
              borderRadius: "100%",
              scale: 1.1,
              rotate: 0,
            }}
            whileTap={{ borderRadius: "100%", scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          />
        </section>
        <section className="about-us-text">
          <h2>About HKUSTSU TSA</h2>
          <hr />
          <p>
            The Hong Kong University of Science and Technology Taiwanese Student
            Association (HKUST) is a non-profit, non-religious, and
            non-political group. Our primary mission is to help Taiwanese
            students at HKUST adapt to campus life and academic studies in Hong
            Kong, while providing them with a sense of home away from home.
            Additionally, we warmly welcome anyone interested in Taiwan to join
            our activities and learn more about the beautiful island.
          </p>
          <p>
            <em>
              This organization is a registered student union of Hong Kong
              University of Science and Technology.
            </em>
          </p>
        </section>
      </section>
      <section className="ust-map">
        <h3>WHERE IS HKUST?</h3>
        <p>
          The Hong Kong University of Science and Technology (HKUST) is situated
          on the Clear Water Bay Peninsula in the New Territories of Hong Kong,
          encompassing an area of approximately 60 hectares. <br />
          The campus boasts picturesque surroundings, offering breathtaking
          views of mountains and the sea.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8777.416925556403!2d114.25935688980726!3d22.33666096961494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404046bc19c7e15%3A0x2bedd58f9cf841be!2sHong%20Kong%20University%20of%20Science%20and%20Technology%20(HKUST)!5e0!3m2!1sen!2stw!4v1721486191213!5m2!1sen!2stw"
          style={mapStyle}
        ></iframe>
      </section>
      <section className="exco-intro">
        <div className="exco-intro-text">
          <h2>2024-2025 Executive Council(EXCO)</h2>
          <p></p>
        </div>
        <div className="exco-intro-cards">
          <Cards />
        </div>
        <div className="exco-intro-cards2">
          <Cards2 />
        </div>
      </section>
      <img src={photo} alt="fixed-image" className="fixed-image" />
      <Contact />
    </div>
  );
};

export default About;
