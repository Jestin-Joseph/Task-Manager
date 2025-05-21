import Sidebar from '../../Components/SideBar/Sidebar.jsx'

import Styles from "./PrimaryView.module.scss"
import { Outlet } from 'react-router-dom'
import { ProtectedRoute } from '../../Context/AuthContext.js'

function PrimaryView() {


  return (
    <ProtectedRoute>
      <div className={Styles.PrimaryView_Container}>
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
    </ProtectedRoute>
  )
}

export default PrimaryView