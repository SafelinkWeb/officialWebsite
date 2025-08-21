import { useState } from 'react'
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
        {/* 圖檔放 public/indexpic/logo.jpg，路徑可直接用 /indexpic/logo.jpg */}
        <img src={logo} alt="SafeLink Logo" />
      </div>

      {/* 桌面版導覽 */}
      <nav>
        <div className="dropdown">
          <ul>
            <li><a>關於我們</a>
              <div className="dropdown-menu">
                <div className="row">
                  <a href="/about/aboutus/index.html">關於博創</a>
                  <a href="/about/corpartner/index.html">企業文化</a>
                  <a href="/about/corpculture/index.html">服務據點</a>
                  <a href="/about/servlocate/index.html">企業夥伴</a>
                </div>
              </div>
            </li>

            <li><a>服務項目</a>
              <div className="dropdown-menu">
                <div className="row">
                  <a href="/service/personalcons/index.html">個資保護顧問服務</a>
                  <a href="/service/detectserv/index.html">資安防護顧問服務</a>
                  <a href="/service/inforcons/index.html">資安檢測技術服務</a>
                  <a href="#">資安技術解決方案</a>
                  <a href="#">企業管理顧問服務</a>
                  <a href="#">網站規劃設計服務</a>
                  <a href="#">輔導實績</a>
                </div>
              </div>
            </li>

            <li><a>教育訓練</a>
              <div className="dropdown-menu">
                <div className="row">
                  <a href="/training/ISMS/index.html">資訊安全管理領域</a>
                  <a href="/training/PIMS/index.html">個人資料管理領域</a>
                  <a href="/training/businessfield/index.html">企業管理領域</a>
                  <a href="#">隱私權保護政策</a>
                </div>
              </div>
            </li>

            <li><a>活動訊息</a>
              <div className="dropdown-menu">
                <div className="row">
                  <a href="/eventmsg/coursinfo/index.html">課程訊息</a>
                  <a href="/eventmsg/pims/index.html">個人資料管理領域</a>
                </div>
              </div>
            </li>

            <li><a>新知分享</a>
              <div className="dropdown-menu">
                <div className="row">
                  <a href="/news/ISO/index.html">ISO國際認證</a>
                  <a href="/news/infonews/index.html">資訊安全新知</a>
                  <a href="/news/workmanage/index.html">職場經營</a>
                </div>
              </div>
            </li>

            <li><a>顧問團隊</a>
              <div className="dropdown-menu">
                <div className="row">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* 行動版選單（React 控制顯示/隱藏） */}
      {showMobile && (
        <div id="mobileMenu" className="mobile-menu" style={{ display: 'block' }}>
          <MobileMenu onClose={() => setShowMobile(false)} />
        </div>
      )}
    </header>
  )
}
