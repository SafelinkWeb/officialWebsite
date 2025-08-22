// src/pages/about/AboutUs.jsx
import './aboutus.css'

export default function AboutUs() {
  return (
    <main>
      {/* 主視覺區塊 */}
      <section className="hero">
        {/* 背景影片（public 目錄下可用絕對路徑） */}
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/about/aboutus/aboutuspic/0807-3.mp4" type="video/mp4" />
        </video>

        {/* 前景文字（原檔空白，保留結構） */}
        <div className="hero-text">
          <h1><b></b></h1>
        </div>
      </section>

      {/* 內容區塊 */}
      <section className="services">
        <h2>我們是誰?</h2>

        <div className="aboutuspic">
          <img
            src="/about/aboutus/aboutuspic/aboutus-teams.jpg"
            alt="SafeLink 團隊合照"
          />
        </div>
      </section>
    </main>
  )
}
