import React from "react";
import publicity from "../images/publicity.svg";
import marketing from "../images/marketing.svg";
import it from "../images/it.svg";
import general from "../images/general.svg";
import "../styles/cards-effect2.css";

const Cards2 = () => {
  return (
    <div>
      <section className="cards">
        <section className="card1">
          <img src={publicity} alt="publicity" />
        </section>
        <section className="card2">
          <img src={marketing} alt="marketing" />
        </section>
        <section className="card3">
          <img src={it} alt="it" />
        </section>
        <section className="card4">
          <img src={general} alt="general" />
        </section>
      </section>
    </div>
  );
};

export default Cards2;
