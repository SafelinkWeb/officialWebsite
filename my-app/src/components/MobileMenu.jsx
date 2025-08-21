import { useState } from 'react'

const menuData = {
  main: [
    { label: '關於我們', submenu: 'about' },
    { label: '服務項目', submenu: 'service' },
    { label: '教育訓練', submenu: 'training' },
    { label: '活動訊息', submenu: 'eventmsg' },
    { label: '新知分享', submenu: 'news' },
    { label: '顧問團隊', submenu: 'teams' }
  ],
  about: ['關於博創', '企業文化', '服務據點', '企業夥伴'],
  service: ['個資保護顧問服務', '資安防護顧問服務', '資安檢測技術服務'],
  training: ['資訊安全管理領域', '個人資料管理領域', '企業管理領域', '隱私權保護政策'],
  eventmsg: ['課程訊息', '個人資料管理領域'],
  news: ['ISO國際認證', '資訊安全新知', '職場經營'],
  teams: ['ISO', '資訊安全']
}

export default function MobileMenu({ onClose }) {
  const [currentMenu, setCurrentMenu] = useState('main')

  const goBack = (e) => {
    e.preventDefault()
    setCurrentMenu('main')
  }

  return (
    <div className="mobile-menu" style={{ display: 'block' }}>
      <div className="submenu-header" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {currentMenu !== 'main' && (
          <a href="#" onClick={goBack}>← 返回</a>
        )}
        <button aria-label="關閉選單" onClick={onClose}>✕</button>
      </div>

      {currentMenu === 'main' ? (
        menuData.main.map((item, idx) => (
          <div className="menu-item" key={idx}>
            {/* 這裡用 button 避免 a# 造成頁面跳到頂部 */}
            <button onClick={() => setCurrentMenu(item.submenu)}>{item.label}</button>
          </div>
        ))
      ) : (
        <div className="allmenu">
          {menuData[currentMenu].map((text, idx) => (
            <div className="menu-item" key={idx}>
              <a href="#">{text}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
