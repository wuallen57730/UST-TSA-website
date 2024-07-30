import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import "../styles/freshmen.css";
import Subfreshmen from "../components/SubFreshmen";
import photo from "../images/freshmen.jpg";
const Freshmen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="freshmen">
      <section className="empty-container">
        <h3>Freshmen Pre-arrival</h3>
      </section>
      <Subfreshmen />

      <img src={photo} alt="fixed-image" className="fixed-image" />
    </div>
  );
};

export default Freshmen;
