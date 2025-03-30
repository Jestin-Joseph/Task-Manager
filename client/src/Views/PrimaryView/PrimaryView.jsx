import React from 'react'
import Sidebar from '../../Components/SideBar/Sidebar.jsx'
import { Outlet } from 'react-router-dom'
function PrimaryView() {
  return (
    <div className="flex  ">
      <span className='absolute z-50 top-0 left-0'>
        <Sidebar />
      </span>
      <div id="renderground" className="bg-[#121212] min-h-screen h-auto ml-20 w-full p-4 flex flex-wrap gap-10 text-white">
        <Outlet />


      </div>

    </div>
  )
}

export default PrimaryView