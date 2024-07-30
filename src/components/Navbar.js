import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import "../styles/navbar.css";
import profilePic from "../images/profile_pic.svg";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="logo">
          <m.img
            src={profilePic}
            alt="TSA Logo"
            whileHover={{ scale: 1, rotate: 0, borderRadius: "100%" }}
          />
        </Link>

        <ul id="navbar">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="./about">About Us</Link>
          </li>
          <li>
            <Link to="./usefulinformation">Useful Info</Link>
          </li>
          <li>
            <Link to="./usefulinformation/freshmen">Freshmen</Link>
          </li>
          <li>
            <Link to="./usefulinformation/usefullink">Useful Links</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
