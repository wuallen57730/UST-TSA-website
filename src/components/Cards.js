import React from "react";
import financial from "../images/financial.svg";
import evp from "../images/ivp.svg";
import president from "../images/president.svg";
import ivp from "../images/evp.svg";
import "../styles/cards-effect.css";

const Cards2 = () => {
  return (
    <div>
      <section className="cards">
        <section className="president">
          <img src={president} alt="president" />
        </section>
        <section className="ivp">
          <img src={ivp} alt="ivp" />
        </section>
        <section className="evp">
          <img src={evp} alt="evp" />
        </section>
        <section className="financial">
          <img src={financial} alt="financial" />
        </section>
      </section>
    </div>
  );
};

export default Cards2;
