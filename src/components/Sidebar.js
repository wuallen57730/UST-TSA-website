import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidenav}
        style={{ fontSize: "30px", cursor: "pointer" }}
      >
        &#9776; open
      </button>
      <div
        style={{
          height: "100%",
          width: isOpen ? "250px" : "0",
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          backgroundColor: "#111",
          overflowX: "hidden",
          transition: "0.5s",
          paddingTop: 60,
        }}
      >
        <Link
          to="/about"
          style={{
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: 25,
            color: "#818181",
            display: "block",
            transition: "0.3s",
          }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: 25,
            color: "#818181",
            display: "block",
            transition: "0.3s",
          }}
        >
          Services
        </Link>
        <Link
          to="/clients"
          style={{
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: 25,
            color: "#818181",
            display: "block",
            transition: "0.3s",
          }}
        >
          Clients
        </Link>
        <Link
          to="/contact"
          style={{
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: 25,
            color: "#818181",
            display: "block",
            transition: "0.3s",
          }}
        >
          Contact
        </Link>
        <button
          style={{
            position: "absolute",
            top: 0,
            right: 25,
            fontSize: 36,
            marginLeft: 50,
          }}
          onClick={toggleSidenav}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
