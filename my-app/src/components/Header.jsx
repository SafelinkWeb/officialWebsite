// src/components/Header.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'   
import MobileMenu from './MobileMenu.jsx'
import logo from "../assets/logo.jpg"



export default function Header() {
  const [showMobile, setShowMobile] = useState(false)

  return (
    <header className="navbar">
      <button
        className="menu"
        aria-label="開關選單"
        onClick={() => setShowMobile(s => !s)}
      >
        &#9776;
      </button>

      <div className="logo">
        <Link to="/">                        
          <img src={logo} alt="SafeLink Logo" />
        </Link>
      </div>

      {/* 桌面版導覽 */}
      <nav>
        <div className="dropdown">
          <ul>
            <li><a>關於我們</a>
              <div className="dropdown-menu">
                <div className="row">
                  <Link to="/about/aboutus">關於博創</Link>
                  <Link to="/about/corpartner">合作夥伴</Link>
                  <Link to="/about/corpculture">企業文化</Link>
                  <Link to="/about/servlocate">服務據點</Link>
                </div>
              </div>
            </li>

            <li><a>服務項目</a>
              <div className="dropdown-menu">
                <div className="row">
                  <Link to="/service/personalcons">個資保護顧問服務</Link>
                  <Link to="/service/detectserv">資安防護顧問服務</Link>
                  <Link to="/service/inforcons">資安檢測技術服務</Link>
                </div>
              </div>
            </li>

            <li><a>教育訓練</a>
              <div className="dropdown-menu">
                <div className="row">
                  <Link to="/training/ISMS">資訊安全管理領域</Link>
                  <Link to="/training/PIMS">個人資料管理領域</Link>
                  <Link to="/training/businessfield">企業管理領域</Link>
                </div>
              </div>
            </li>

            <li><a>活動訊息</a>
              <div className="dropdown-menu">
                <div className="row">
                  <Link to="/eventmsg/coursinfo">課程訊息</Link>
                  <Link to="/eventmsg/pims">個人資料管理領域</Link>
                </div>
              </div>
            </li>

            <li><a>新知分享</a>
              <div className="dropdown-menu">
                <div className="row">
                  <Link to="/news/ISO">ISO國際認證</Link>
                  <Link to="/news/infonews">資訊安全新知</Link>
                  <Link to="/news/workmanage">職場經營</Link>
                </div>
              </div>
            </li>

            <li><a>顧問團隊</a>
              <div className="dropdown-menu">
                <div className="row">
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* 行動版選單 */}
      {showMobile && (
        <div id="mobileMenu" className="mobile-menu" style={{ display: 'block' }}>
          <MobileMenu onClose={() => setShowMobile(false)} />
        </div>
      )}
    </header>
  )
}
