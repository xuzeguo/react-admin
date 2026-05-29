import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
