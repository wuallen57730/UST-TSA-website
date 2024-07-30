import React from "react";
import { motion as m } from "framer-motion";
import "animate.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HKUST1 from "../images/1.svg";
import HKUST2 from "../images/2.jpg";
import HKUST3 from "../images/3.jpg";
import HKUST4 from "../images/4.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
const swiperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "98.9vw",
  height: "70vh",
  overflow: "hidden",
};
const SwiperSlideStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background: "#A770EF" /* fallback for old browsers */,
  // background:
  //   "-webkit-linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF)" /* Chrome 10-25, Safari 5.1-6 */,
  // background: "linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF)",
  //
  // backgroundColor: "#ff7e5f", // fallback for old browsers
  // background: "-webkit-linear-gradient(to right, #feb47b, #ff7e5f)",
  // background: "linear-gradient(to right, #feb47b, #ff7e5f)",
  //
  // backgroundColor: "#de6161",
  // background: "-webkit-linear-gradient(to right, #2657eb, #de6161)",
  // background: "linear-gradient(to right, #2657eb, #de6161)",
  //
  backgroundColor: "#0F2027",
  background: "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)",
  background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
  //background: "#C6FFDD" /* fallback for old browsers */,
  // background:
  //   "-webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)" /* Chrome 10-25, Safari 5.1-6 */,
  // background:
  //   "linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
};
const slideStyle = {
  width: "60vw",
  height: "60vh",
  display: "flex",
  alignItems: "center",
  boxSizing: "borderBox",
  // backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundColor: "transparent",
};

const imgStyle = {
  flex: "1",
  width: "100%",
  height: "100%",
  padding: "2.5rem",
  backgroundColor: "transparent",
};
const introStyle = {
  backgroundColor: "transparent",
  color: "white",
  flex: "2",
  //上 右 下 左
  padding: "0.5rem 0.5rem 0.5rem 1rem",
};
const h3Style = {
  fontSize: "1.5rem",
  marginBottom: "0",
  marginTop: "1rem",
};
export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        style={swiperStyle}
      >
        <SwiperSlide style={SwiperSlideStyle}>
          {({ isActive }) => (
            <div style={slideStyle}>
              <m.img
                src={HKUST1}
                alt="image1"
                style={imgStyle}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 100,
                  borderRadius: isActive ? "15%" : 0,
                  transition: { duration: 1.4 },
                }}
                // transition={{}}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
              />
              <section className="intro" style={introStyle}>
                <h3 style={h3Style}>Welcome Dinner</h3>
                <hr />
                <p>
                  透過參與Welcome
                  Dinner，台灣學生間能夠能加熟悉彼此，不只是學長姐的聚餐，也是大一新生建立人脈的機會！歡迎各位踴躍參加～
                  期待各位與我們共享盛宴！
                  <br />
                  <br />
                  活動資訊如下：
                  <br />
                  ✅日期：09/08 (Fri) <br />
                  ✅時間：18:30-20:30 <br />
                  ✅地點：Crystal Jade 翡翠拉麵小籠包 將軍澳分店 (將軍澳PopCorn
                  F09號鋪) <br />
                  ✅價格：HKD150/人
                  <br />
                  ⚠️報名截止於09/03 (Sun) 23:59⚠️
                </p>
              </section>
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide style={SwiperSlideStyle}>
          {({ isActive }) => (
            <div style={slideStyle}>
              <m.img
                src={HKUST2}
                alt="image2"
                style={imgStyle}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 100,
                  borderRadius: isActive ? "15%" : 0,
                  transition: { duration: 1.4 },
                }}
                // transition={{}}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
              />
              <section className="intro" style={introStyle}>
                <h3 style={h3Style}>Pre-arrival</h3>
                <hr />
                <p>
                  各位科大新生們： 歡迎來到科大台灣人的大家庭！
                  臺灣學生會一直致力於幫助新生們適應大學生活。為了讓你們更輕鬆地融入科大校園，我們將於6/29舉辦Pre-arrival新生說明會。
                  在說明會中，我們將為你們提供實用的資訊，包括：抵港流程、校園生活、宿舍選擇、Q&A時間
                  <br />
                  <br />
                  活動資訊如下:
                  <br />
                  ✅Date: 29 June <br />
                  ✅Time: 20:00~22:00 <br />
                  ✅平台：Zoom
                </p>
              </section>
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide style={SwiperSlideStyle}>
          {({ isActive }) => (
            <div style={slideStyle}>
              <m.img
                src={HKUST3}
                alt="image3"
                style={imgStyle}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 100,
                  borderRadius: isActive ? "15%" : 0,
                  transition: { duration: 1.4 },
                }}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
              />
              <section className="intro" style={introStyle}>
                <h3 style={h3Style}>Annual Dinner</h3>
                <hr />
                <p>
                  Annual Dinner 為 TSA
                  最重要的活動之一，除了可以增加同學間的互動，也將邀請來自臺灣的教授與職員共襄盛舉，期待我們能在這場宴會中更熟悉彼此，交流經驗。
                  <br />
                  <br />
                  以下是活動資訊: <br />
                  ✅日期：2023/10/06 (五) <br />
                  ✅時間：18:30-21:00 (18:00開放入場) <br />
                  ✅地點：香港科技大學南北小廚 <br />
                  ✅服裝：請穿著正式 (Formal) 服裝出席 <br />
                  ✅價格：大一會員免費 / 會員 120 HKD / 非會員 170 HKD (每人)
                  <br />
                  ✅付款方式：FPS / 轉賬
                </p>
              </section>
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide style={SwiperSlideStyle}>
          {({ isActive }) => (
            <div style={slideStyle}>
              <m.img
                src={HKUST4}
                alt="image4"
                style={imgStyle}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 100,
                  borderRadius: isActive ? "15%" : 0,
                  transition: { duration: 1.4 },
                }}
                // transition={{}}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
              />
              <section className="intro" style={introStyle}>
                <h3 style={h3Style}>2024 Boat Trip</h3>
                <hr />
                <p>
                  Boat trip 報名開始了！這次將開放五校共同報名
                  大家把握機會進一步熟悉彼此 此次 Boat Trip
                  將包含多種水上活動設施
                  包括：快艇滑水、香蕉船、充氣滑梯、充氣彈床、浮毯，船上設冷氣、卡啦OK、音響系統
                  以及午餐、無酒精飲料、酒精飲料
                  報名成功後將會收到活動報名確認信 請報名者多多留意
                  本次活動採先到先得
                  <br />
                  <br />
                  活動資訊如下：
                  <br /> ✅日期: March 29th <br />
                  ✅地點: 西貢近海 <br />
                  ✅價格: 會員 300 HKD per person 非會員 350 HKD per person
                  <br />
                  ✅報名時間: 2/20 - 3/20
                </p>
              </section>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
