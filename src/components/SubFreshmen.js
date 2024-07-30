import React, { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion as m } from "framer-motion";
const SubFreshmen = () => {
  const anchorRef = useRef();

  const scrollToAnchor = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  };
  return (
    <div>
      <section className="anchors">
        <ul>
          <li className="iconAcademic">
            <ScrollLink
              to="#academic"
              onClick={() => scrollToAnchor("academic")}
            >
              Academic
            </ScrollLink>
          </li>
          <li className="iconHall">
            <ScrollLink
              to="#hall"
              spy={true}
              smooth={true}
              onClick={() => scrollToAnchor("hall")}
            >
              Hall
            </ScrollLink>
          </li>
          <li className="iconArrive">
            <ScrollLink to="#arrive" onClick={() => scrollToAnchor("arrive")}>
              入港手續
            </ScrollLink>
          </li>
          <li className="iconNecessities">
            <ScrollLink
              to="#necessities"
              onClick={() => scrollToAnchor("necessities")}
            >
              日常用品及必備物品
            </ScrollLink>
          </li>
        </ul>
      </section>

      <section id="academic" className="academic">
        <h2 id="academic" ref={anchorRef}>
          Academic
        </h2>

        <hr />
        <h3>Major Selection(SBM)</h3>
        <ol>
          <li>
            GBUS / QFIN / ECOF / BIBU / MAEC / SGFN / RMBI會在大一下就面試
          </li>
          <li>
            ACCT / ECON / FINA / IS / OM / MARK / MGMT會在大二上結束後分系
            <br />
            分系依照各系的Major Foundation Courses的成績決定，詳情請見
            <RouterLink
              to="https://bmundergrad.hkust.edu.hk/academics/academic-planning/major-selections/reference-materials"
              target="_blank"
            >
              BBA Past Admission Scores(For Reference Only)
            </RouterLink>
          </li>
        </ol>
        <h3>Major Selection(SENG)</h3>
        <ol>
          <li>工院大一統一不分系，選系結果將在大一升大二暑假公布</li>
          <li>
            選系依照每個人大一最好的24學分的成績排優先順序
            <br />
            (注意:若有修4學分的課在24學分計算中只算3學分)
          </li>
        </ol>
      </section>

      <m.section
        id="hall"
        className="hall"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 id="hall" ref={anchorRef}>
          Hall
        </h2>

        <hr />
        <h3>宿舍房間基本配備</h3>
        <ul>
          <li>
            衣櫥、床、床墊、書桌、檯燈、冰箱、冷氣、垃圾桶 (冷氣：1 HKD
            吹50分鐘，上網儲值)
          </li>
          <li>
            香港單人床尺寸和台灣不一樣，大概78*207公分
            (台灣床單硬塞可以裝得下，也可以來香港買)
          </li>
        </ul>
        <h3>宿舍怎麼選？</h3>
        <ul>
          <li>SHRLO會寄email通知你選宿舍</li>
          <li>網站申請：三個志願（不用搶，因為是用抽籤的方式決定宿舍）</li>
          <li>7 8 9是新的hall，1 2 3 4 5 6較舊，6 7 8 9沒有hall莊</li>
          <li>
            注意：不要三個都填新的hall，不然很容易中5 789放志願第一位才會上
          </li>
          <li>建議填法: 7/8/9 擇一（8 9比較容易上） + 1/2/3/4/6 擇二</li>
        </ul>
        <h3>注意事項</h3>
        <ul>
          <li>進出需要Student ID，有些hall晚上security會查身分</li>
          <li>Hall 7.8.9 管比較嚴</li>
          <li>Visit Hours: 9:00-23:00 (一位住戶可以帶兩個訪客)</li>
          <li>在別人房間過夜(網路登記)：20HKD</li>
          <li>忘記帶房卡：10HKD / 弄丟房卡：80HKD</li>
          <li>No drinking / gambling / smoking</li>
          <li>記得準時申請hall＆繳hall fee＆accept hall offer</li>
        </ul>
        {/* <h3>宿舍分布</h3> */}
        {/* <img src={photo} alt="Hall map" /> */}
      </m.section>

      <m.section
        id="arrive"
        className="arrive"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 id="arrive" ref={anchorRef}>
          入港手續
        </h2>

        <hr />
        <h3>註冊</h3>
        <ul>
          <li>
            網路註冊，學校會信箱通知
            <ul>
              <li>VISA 申請</li>
              <li>申請宿舍、宿舍結果</li>
              <li>註冊日期</li>
              <li>繳學費、宿舍費</li>
              <li>選課</li>
            </ul>
          </li>
          <li>內容包括註冊時程，學費繳交，獎學金發放，帳戶開通</li>
        </ul>
        <h3>入境香港</h3>
        <ul>
          <li>持有HKID、多次簽證後能自由進出香港</li>
          <li>
            入境香港需用學生簽證通關，勿使用台胞證或其他證件（學生簽證非常重要，務必妥善保管）
          </li>
        </ul>
        <h3>申請證件(入境後)</h3>
        <h4>香港智能身份證（HKID）</h4>
        <ul>
          <li>入港後30天內申辦</li>
          <li>很難預約到，推薦寄信尋求幫助</li>
          <li>
            申辦後會先拿到臨時身分證（一張紙），可持臨時身份證出入境香港/開戶，須妥善保管，憑證領取正式身分證
          </li>
          <li>灣仔辦事處：可以同時辦多次簽證（港鐵灣仔, 會展站）</li>
          <li>將軍澳辦事處：最近</li>
          <li>
            <RouterLink
              to="https://www.gov.hk/tc/residents/immigration/idcard/hkic/bookregidcard.htm"
              target="_blank"
            >
              上網預約
            </RouterLink>
          </li>
        </ul>
        <h4>多次出入境許可證（MEP）</h4>
        <ul>
          <li>
            Application Form: (申請前填妥，能減少時間）
            <br />
            <RouterLink
              to="http://www.immd.gov.hk/hkt/forms/forms/id931.html"
              target="_blank"
            >
              http://www.immd.gov.hk/hkt/forms/forms/id931.html
            </RouterLink>
          </li>
          <li>
            表格旅行證件加蓋簽注表: <br />
            <RouterLink
              to="http://www.immd.gov.hk/hkt/forms/forms/id405.html"
              target="_blank"
            >
              http://www.immd.gov.hk/hkt/forms/forms/id405.html
            </RouterLink>
          </li>
          <li>入境事務處總部 : 新界將軍澳寶邑路61號</li>
          <li>
            辦公時間: <br />
            星期一至五: 8:45AM-4:30PM <br />
            星期六: 9:00AM-11:30AM <br />
            周日及公眾假日休息
          </li>
        </ul>
        <h4>手機門號申辦</h4>
        <ul>
          <li>可以直接在坑口辦理，比較近</li>
          <li>
            須攜帶：香港身份證（臨時也可以）、住址證明（SHRLO外掃描QRCODE）
          </li>
          <li>電信公司：中國移動CMHK、中國聯通、csl</li>
          <li>推薦選擇大專生方案，比較優惠</li>
          <li>app線上辦理</li>
        </ul>
        <h4>學生八達通 </h4>
        <ol>
          <li>
            <RouterLink
              to="https://www.mtr.com.hk/ch/customer/tickets/student_travel_scheme.html"
              target="_blank"
            >
              網上填寫表單
            </RouterLink>
          </li>
          <li>收到email影印表單</li>
          <li>到地鐵站櫃台遞交(申請表、90HKD ）/線上繳費及所需資料</li>
        </ol>
        <h4>兵役</h4>
        <ul>
          <li>
            申請役男出國
            <ul>
              <li>
                入境香港前需要攜帶護照，入學許可，錄取通知書，及役男出國申請書
              </li>
              <li>地點：移民署各縣市服務站&出入境管理局進行辦理</li>
            </ul>
          </li>
          <li>
            兵役(在學證明申請){" "}
            <ul>
              <li>地點：教務處 (在 lift 17,18旁邊）</li>
              <li>
                先線上填
                <RouterLink
                  to="https://registry.hkust.edu.hk/resource-library/application-testimonial-ug"
                  target="_blank"
                >
                  表單
                </RouterLink>
                註明用途（兵役）並付款 ( 30HKD )
              </li>
              <li>3個工作天後在教務處憑email領取</li>
            </ul>
          </li>
          <li>
            兵役(認證在學證明){" "}
            <ul>
              <li>
                地點:台北經濟文化辦事處 (香港灣仔港灣道18號中環廣場49樓4907室)
              </li>
              <li>
                <RouterLink
                  to="https://www.surveycake.com/s/9gXVx"
                  target="_blank"
                >
                  香港文件驗證專案預約系統
                </RouterLink>
              </li>
              <li>帶護照 </li>
              <li>120 HKD認證費</li>
              <li>3~4 工作天</li>
              <li>只有早上能申請</li>
            </ul>
          </li>
        </ul>
      </m.section>

      <m.section
        id="necessities"
        className="necessities"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 id="necessities" ref={anchorRef}>
          日常用品及必備物品
        </h2>

        <hr />
        <h3>日常用品</h3>
        <ul>
          <li>
            電器：香港是220Ｖ
            跟台灣不一樣，記得要帶轉接頭延長線！很多東西例如吹風機建議直接在當地購買即可
            (如果要帶電鍋，注意電壓問題！)
          </li>
          <li>
            住宿：宿舍都有附床墊，不用自己買，需自備床單、枕頭、棉被（來香港IKEA買就好）其他如牙刷、牙膏、毛巾等等都可以自己考慮從台灣攜帶還是在當地購買
          </li>
          <li>
            衣服：夏天
            冬天衣物，記得帶西裝（套裝），因為時不時會用到（香港成衣便宜也可以來當地購買）喜歡游泳的孩子可帶一下泳衣
          </li>
          <li>
            房間都有檯燈、空調、風扇、小冰箱，大部分common
            room有電磁爐、鍋碗瓢盆、碗筷等等（可以IKEA買）
          </li>
          <li>
            計算機 <br />
            工程用：台灣買便宜很多
            <br />
            金融用：可以到學校再買，因為一樣貴
          </li>
          <li>
            個人備用藥物、洗衣袋、文具、雨傘、泡麵零食少許、收納工具、八達通卡（入學後可以申請學生八達通，有半價優惠）
          </li>
        </ul>
        <h3>資料文件(正本)</h3>
        <ul>
          <li>畢業證書</li>
          <li>學測成績單</li>
          <li>高中成績單</li>
          <li>Offer Letter</li>
          <li>單次入境許可證</li>
          <li>護照</li>
          <li>Student VISA</li>
          <li>大頭貼照多張</li>
        </ul>
      </m.section>
    </div>
  );
};

export default SubFreshmen;
