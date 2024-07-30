import React from "react";
import "../styles/icons.css";
import { Link } from "react-router-dom";
import fb from "../icons/facebook.svg";
const Icons = () => {
  return (
    <div>
      <ul className="icons">
        <li>
          <Link to="https://www.facebook.com/profile.php?id=100012512077239">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i src={fb} className="fa fa-twitter" aria-hidden="true">
              {/* <img src={fb} alt="fb" /> */}
            </i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-google-plus" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/raj-kumar-web-designer/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
