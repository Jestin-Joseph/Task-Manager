import React, { useState } from 'react'

//icons
import { LayoutDashboard } from 'lucide-react';
import { Dot } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Target } from 'lucide-react';
import { LayoutList } from 'lucide-react';
import { PanelLeftOpen } from 'lucide-react';
import { PanelLeftClose } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

import Styles from "./Sidebar.module.scss"
import { useLocation } from 'react-router-dom';



function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation()
  const [expand, setExpand] = useState(false)
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

  return (
    <aside className={`${Styles.sidebarContainer} ${expand && Styles.expandedSiderBar} `}>
      <IconButton
        sx={{ cursor: 'pointer', color: 'var(--text-side)', alignSelf: 'flex-start' }}
        onClick={() => setExpand(!expand)}
      >
        {expand ? <PanelLeftClose /> : <PanelLeftOpen />}
      </IconButton>
      <nav className={`${Styles.navItems} ${expand && Styles.expandedNav} `}>
        {
          sideBarItems.map((item, index) => (
            <div
              key={item.id}
              className={Styles.navItem}
              onClick={() => { navigate(item.link) }}
            >
              <span className={Styles.itemIconAndPointer}>
                <span>
                  {item.link === location.pathname && <Dot color='red' strokeWidth={3} />}
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
    </aside>
  )
}

export default Sidebar