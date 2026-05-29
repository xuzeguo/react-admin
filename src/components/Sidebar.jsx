import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  const menuItems = [
    { path: '/', label: '仪表板', icon: '📊' },
    { path: '/users', label: '用户管理', icon: '👥' },
    { path: '/settings', label: '系统设置', icon: '⚙️' }
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>React Admin</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={item.path === '/'}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
