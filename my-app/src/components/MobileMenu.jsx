import { useState } from 'react'

// menuData：定義整個行動版選單的資料
// main：主選單（大項目），每個物件有 label（顯示文字）和 submenu（對應的子選單 key）
// 其他 key（about, service, ...）：對應子選單的選項清單
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

export default function MobileMenu() {
  // currentMenu：紀錄目前要顯示哪個選單，預設是 'main'（主選單）
  const [currentMenu, setCurrentMenu] = useState('main')

  // 打開子選單：阻止預設連結行為，並把 currentMenu 改成對應的 key
  const openSubmenu = (e, key) => {
    e.preventDefault()
    setCurrentMenu(key)
  }

  // 返回主選單：阻止預設連結行為，並把 currentMenu 改回 'main'
  const goBack = (e) => {
    e.preventDefault()
    setCurrentMenu('main')
  }

  return (
    <div className="mobile-menu">
      {/* === 主選單區塊（深藍底） === */}
      {currentMenu === 'main' && (
        <div className="menu-list">
          {menuData.main.map((item, idx) => (
            <div className="menu-item" key={idx}>
              {/* 點擊大項目會切換到對應子選單 */}
              <a href="#" onClick={(e) => openSubmenu(e, item.submenu)}>
                {item.label}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* === 子選單區塊（白底） === */}
      {currentMenu !== 'main' && (
        <div className="allmenu">
          {/* 子選單頂部有「← 返回」 */}
          <div className="submenu-header">
            <a href="#" onClick={goBack}><strong>← 返回</strong></a>
          </div>

          {/* 子選單項目列表 */}
          <div className="menu-list">
            {menuData[currentMenu].map((text, idx) => (
              <div className="menu-item" key={idx}>
                <a href="#">{text}</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
