//Component in Useful Information
import React, { useEffect, useRef } from "react";
import { motion as m } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/life.css";

import photo from "../images/HKUST3.svg";
import shoppingPhoto from "../images/hong_kong_street.jpg";
import trafficPhoto from "../images/system_map (1).svg";

function Moving({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Life = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="lifeInHK">
        <h2>Life in HKUST</h2>
      </section>

      <section id="academic" className="life-academic">
        <m.section
          className="acdemicPhoto"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <img src={photo} alt="" />
        </m.section>
        <m.section
          className="acdemicText"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <h2>Learning</h2>

          <hr />
          <ul>
            <li>學習用品：文具、筆電、平板</li>
            <li>
              電子產品：Apple Store BTS開學季持香港學生證會有優惠 <br />
            </li>
            <li>
              學習地點：圖書館LC (Learning Common,
              LG1前面)會開放24小時（期中期末考前會整層,及LG5開放24小時）
            </li>
          </ul>
        </m.section>
      </section>
      <section className="life-shopping">
        <m.section
          className="shoppingText"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <h2>購物場所（生活必需品）</h2>
          <hr />
          <p>
            <ul>
              <li>校內：Fusion(超市）</li>
              <li>
                坑口：百佳、一田超市、惠康（頂好）、市場 將軍澳：Marketplace
              </li>
              <li>IKEA：市區有多家</li>
              <li>
                淘寶、電商購物（包裹集運到學校內領）Lift19旁
                （也可以直接訂到宿舍樓下）
              </li>
              <li>坑口：東港城（中國移動、天仁茗茶、comebuy、muji）</li>
              <li>將軍澳：Popcorn（Star Cinema 、各種化妝服飾品牌、海底撈）</li>
              <li>觀塘：APM、Apple Store、KTV</li>
              <li>銅鑼灣：時代廣場, Hysan</li>
              <li>尖沙咀：K11, 海港城</li>
            </ul>
          </p>
        </m.section>
        <m.section
          className="shoppingPhoto"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <img src={shoppingPhoto} alt="" />
        </m.section>
      </section>
      <section id="traffic" className="life-traffic">
        <m.section
          className="trafficPhoto"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <img src={trafficPhoto} alt="Traffic" />
          <p>
            Credit:{" "}
            <Link
              to="https://www.mtr.com.hk/ch/customer/services/system_map.html"
              target="_blank"
            >
              港鐵路線圖
            </Link>
          </p>
        </m.section>
        <m.section
          className="trafficText"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <h2>Traffic</h2>

          <hr />
          <h3>機場至科大（港鐵、巴士、的士）</h3>
          <ol>
            <li>機場巴士A29+上山大/小巴</li>
            <li>
              至坑口巴士站或彩虹地鐵站C出口搭機場巴士→乘坐小巴11或11M(6 HKD）、
              <br />
              大巴 91或91M（6.1HKD） 即可抵達香港科技大學
            </li>
          </ol>
          <h3>機場快線+地鐵+上山大/小巴：</h3>
          <ol>
            <li>
              機場快線 （香港方向）→香港站換乘→港島綫（柴灣方向）→北角站換乘→
              <br />
              將軍澳綫（寶琳方向）→ 坑口站下車（AB出口皆可） →乘坐小巴11或
              11M（6 HKD） <br />
              即可抵達香港科技大學
            </li>
          </ol>
          <h3>科大交通</h3>
          <ol>
            <li>
              北門：坑口站（小巴11、11M）、寶琳（大巴91M）、將軍澳and調景領（792M）
            </li>
            <li>南門：彩虹（小巴11）、鑽石山（91、91M）</li>
            <li>地鐵、的士、uber、shuttle bus</li>
          </ol>
        </m.section>
      </section>
    </div>
  );
};

export default Life;
