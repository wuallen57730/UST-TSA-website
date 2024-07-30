import React, { useEffect } from "react";

import { motion } from "framer-motion";

import "../styles/usefulinformation.css";

import Slider from "../components/Slider";
import Life from "../components/Life";

import photo from "../images/useful_photo.jpg";
import qrcode from "../images/qrcode_linktr.ee.svg";

const UsefulInformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src={photo} alt="fixed-image" className="fixed-image" />
      <section className="empty-container">
        <h3>Useful Information</h3>
      </section>
      <section className="annualEvent">
        <h2>Annual Events</h2>
        <p className="annualEventText">
          HKUST TSA將在接下來的一年中舉辦大大小小的活動，
          <br />
          主要活動有Pre-arrival Gathering、Welcome Dinner、Orientation
          Camp、Annual Dinner、Singing Contest和Taiwanese Culture Night。
          <br />
          小活動則有Boat Trip、Halloween Party、Welfare Distribution等
        </p>
        <Slider />
      </section>

      <Life />
      <section className="linktree">
        <section className="linktree-wrapper">
          <motion.img
            src={qrcode}
            alt="Qrcode"
            initial={{ scale: 0.8, borderRadius: "25%" }}
            whileTap={{ scale: 0.9, borderRadius: "25%" }}
          />
        </section>
        <section className="linktree-text">
          <h2>Scan Qrcode to access our linktree!</h2>
        </section>
      </section>
    </div>
  );
};

export default UsefulInformation;
