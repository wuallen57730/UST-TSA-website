//Component in About Us
import React from "react";
import "../styles/contact.css";
import SubContact from "./SubContact";
import arrow from "../icons/icons8-arrow-50.svg";
const Contact = () => {
  return (
    <div className="contact">
      {/* <section className="contact-us-text">
        <h2>Our Mission</h2>
      </section> */}
      <section className="social-part">
        <SubContact />
        <section className="social-text">
          <h2 className="mission">Our Mission</h2>
          <hr />
          <p>
            Exco serves as a team for Taiwanese students, both locals and
            international students, to meet and develop friendships while
            expanding their social network. Exco is composed of sophomore
            Taiwanese students from different schools and majors, and they are
            also involved in other campus organizations. We are energetic and
            enthusiastic about promoting the well-being of Taiwanese students!
            We regularly organize events such as pre-arrival sessions, boat
            trips, welcome dinners, annual dinners, and more.
            <br />
            <br />
            With a steadfast commitment to serving the Taiwanese community and
            promoting its cultural values, TSA has actively engaged in
            initiatives that support the needs of Taiwanese individuals and
            foster a deeper understanding of Taiwan among diverse communities.
            Since its establishment in 2014, the TSA has remained unwavering in
            its mission and purpose, making a significant impact on the lives of
            Taiwanese students and the broader community.
          </p>
          <h2>Questions? DM us with the left icons!</h2>
          <img src={arrow} alt="arrow" />
        </section>
      </section>
    </div>
  );
};

export default Contact;
