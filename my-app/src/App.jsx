import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import AboutUs from "./pages/about/aboutus.jsx";


export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* 首頁 */}
        <Route
          path="/"
          element={
            <>
              <main> {/* Hero 區 */} 
                <section className="hero"> 
                  <div className="hero-text"> 
                    <h1><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is security</b></h1><br/> 
                    <h1><b>only about&nbsp;&nbsp;&nbsp;&nbsp;</b></h1><br/> 
                    <h1><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;physical</b></h1><br/> 
                    <h1><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;protection?&nbsp;&nbsp;&nbsp;&nbsp;</b></h1> 
                  </div> 
                  <div className="hero-button"> <a href="#" className="cta-button">立即諮詢&nbsp;&#8594;</a> 
                  </div> 
                </section> {/* 服務項目 */}
                <section className="services"> 
                  <h2>我們的服務</h2> 
                  <div className="service-grid"> <ServicesSection /> 
                  </div> 
                </section> 
              </main> 
            <footer className="footer"> 
              <p>&copy; 2025 SafeLink 博創資訊股份有限公司 | 地址：台中市xx區xx路xxx號 | 電話：(04) 2525-0535</p> 
            </footer>
            </>
          }
        />

        {/* 關於我們 → 關於博創 */}
        <Route path="/about/aboutus" element={<AboutUs />} />

        {/* 404（可選）*/}
        <Route path="*" element={<div style={{padding: 24}}>找不到頁面</div>} />
      </Routes>
    </>
  );
}
