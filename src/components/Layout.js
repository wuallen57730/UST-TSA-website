import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      {/* <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="contact">Contact Us</Link>

        <div className="dropdown">
          <button className="dropbtn">
            Useful Information
          </button>
          <div className="dropdown-content">
            <Link to="./Freshmen">Freshmen</Link>
            <Link to="./Tour">Tour</Link>
          </div>
        </div>
        <Link to="/usefulinformation">Useful Information</Link>
      </nav> */}
      <Navbar />
      <Outlet />
      <Footer />
      {/* <footer style={footerStyle}>
        <section>
          <img src={logo} alt="logo" style={logostyle} />
        </section>
        <section style={iconsStyle}>
          <Link to="https://www.facebook.com/hkustsutsa" target="_blank">
            <img src={fb} alt="FB" style={iconStyle} />
          </Link>
          <Link to="https://www.instagram.com/hkustsu_tsa/" target="_blank">
            <img src={ig} alt="IG" style={iconStyle} />
          </Link>
        </section>
      </footer> */}
    </div>
  );
};

export default Layout;
