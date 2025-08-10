import Sidebar from '../../Components/SideBar/Sidebar.jsx'
import TopBar from '../../Components/TopBar/TopBar.jsx'
import Styles from "./PrimaryView.module.scss"
import { Outlet } from 'react-router-dom'
import { ProtectedRoute } from '../../Context/AuthContext.js'

function PrimaryView() {


  return (
    <ProtectedRoute>
      <div className={Styles.PrimaryView_Container}>
        <div className={Styles.viewTopBar}>
          <TopBar />
        </div>
        <div className={Styles.content_sidebar_container}>
          <span
            className={Styles.viewNavigation}
          >
            <Sidebar />
          </span>
          <div id="renderground"
            className={Styles.renderingGround}
          >
            <Outlet />
          </div>
        </div>
        {/* <span
          className={Styles.viewNavigation}
        >
          <Sidebar />
        </span>
        <div id="renderground"
          className={Styles.renderingGround}
        >
          <Outlet />
        </div> */}
      </div>
    </ProtectedRoute>
  )
}

export default PrimaryView