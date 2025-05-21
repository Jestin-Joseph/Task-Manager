import React, { useState, useContext } from 'react'

//icons
import { LayoutDashboard } from 'lucide-react';
import { Dot } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Target } from 'lucide-react';
import { LayoutList } from 'lucide-react';


import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import Styles from "./Sidebar.module.scss"

import { AuthContext } from '../../Context/AuthContext';


function Sidebar() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [selected, setSelected] = useState("All Tasks");
  const [showSettings, setShowSettings] = useState(false);
  const sideBarItems = [
    {
      id: 1,
      icon: <LayoutList strokeWidth={1.5} />,
      name: "All Tasks",
      link: "/tasks/all"
    },
    {
      id: 2,
      icon: <UsersRound strokeWidth={1.5} />,
      name: "Groups",
      link: "/user/groups"
    },
    {
      id: 3,
      icon: <Target strokeWidth={1.5} />,
      name: "Projects",
      link: "/user/projects"
    },
    {
      id: 4,
      icon: <LayoutDashboard strokeWidth={1.5} />,
      name: "Dashboard",
      link: "/user/dashboard"
    }
  ]


  function onLogout() {
    authContext.logout();
    navigate('/login');
  }
  return (
    <aside className={Styles.sidebarContainer}>
      <nav className={Styles.navItems}>
        {
          sideBarItems.map((item, index) => (
            <div
              key={item.id}
              className={Styles.navItem}
              onClick={() => { setSelected(item.name); navigate(item.link) }}
            >
              <span className={Styles.itemIconAndPointer}>
                <span>
                  {item.name === selected && <Dot color='red' strokeWidth={3} />}
                </span>
                {item.icon}
              </span>
              <span
                className={Styles.itemName}
              >
                {item.name}
              </span>



            </div>
          ))
        }
      </nav>
      <div className={Styles.user}>
        {showSettings && <div className={Styles.user_settings} >
          <LogOut />
          <p onClick={onLogout}>Log out</p>
        </div>}
        <span className={Styles.user_avatar} ><Avatar onClick={() => { setShowSettings(!showSettings) }} sx={{ cursor: "pointer" }} alt={`${authContext?.user?.first_name} ${authContext?.user?.last_name}`} src="/static/images/avatar/1.jpg" /></span>
        <span className={Styles.user_name}>
          {`${authContext?.user?.first_name} ${authContext?.user?.last_name}`}
        </span>

      </div>
    </aside>
  )
}

export default Sidebar