import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/usefullink.css";
import photo from "../images/vbg-cv-08.jpg";
const UsefulLink = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src={photo} alt="fixed-image" className="fixed-image" />
      <section className="empty-container">
        <h3>Useful Links</h3>
      </section>
      <section className="links">
        <ul className="websites">
          <h3>Useful Websites</h3>
          <hr />
          <li>
            <Link to="https://hkust.edu.hk/stu_intranet/" target="_blank">
              Student Internet
            </Link>
          </li>
          <li>
            <Link to="https://reurl.cc/eDdlaR" target="_blank">
              Student Center
            </Link>
          </li>
          <li>
            <Link to="https://w5.ab.ust.hk/wcq/cgi-bin/2240/" target="_blank">
              Class schedule and quota
            </Link>
          </li>
          <li>
            <Link to="https://registry.ust.hk/ttplanner" target="_blank">
              Timetable planner
            </Link>
          </li>
          <li>
            <Link to="https://lbbooking.ust.hk/" target="_blank">
              Study room booking system
            </Link>
          </li>
          <li>
            <Link to="https://ust.space/" target="_blank">
              USTspace
            </Link>
          </li>
          <li>
            <Link to="https://registry.hkust.edu.hk/useful-tools/credit-transfer/database-institution">
              Credit Transfer Database
            </Link>
          </li>
          <li>
            <Link to="https://prog-crs.hkust.edu.hk/ugprog" target="_blank">
              Program & Course Catalog
            </Link>
          </li>
          <li>
            <Link
              to="https://bmundergrad.hkust.edu.hk/academics/academic-planning/major-selections/reference-materials"
              target="_blank"
            >
              BBA Past Admission Scores
            </Link>
          </li>
          <li>
            <Link to="https://cso.ust.hk/" target="_blank">
              Campus Services Office
            </Link>
          </li>
          <li>
            <Link
              to="https://uce.ust.hk/cgi-bin/web/home/index.php"
              target="_blank"
            >
              Common Core Program
            </Link>
          </li>
        </ul>
        <ul className="app">
          <h3>Useful Apps</h3>
          <hr />
          <li>
            <Link to="https://canvas.ust.hk/" target="_blank">
              Canvas(Student)
            </Link>
          </li>
          <li>
            <Link to="https://duo.com/" target="_blank">
              Duo Mobile
            </Link>
          </li>
          <li>
            <Link to="https://studentapp.hkust.edu.hk/" target="_blank">
              HKUST Student
            </Link>
          </li>
          <li>
            <Link to="https://usthing.xyz/" target="_blank">
              USThing
            </Link>
          </li>
          <li>
            <Link
              to="https://pathadvisor.ust.hk/floor/Overall/at/normalized/1166,654,3"
              target="_blank"
            >
              Path advisor
            </Link>
          </li>
          <li>
            <Link to="https://ilearn.ust.hk/iLearn/home.html" target="_blank">
              iLearn
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UsefulLink;
