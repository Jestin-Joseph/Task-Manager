import React, { useState } from 'react'

//icons
import { LayoutDashboard } from 'lucide-react';
import { CalendarCheck2 } from 'lucide-react';
import { TimerOff } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import { Dot } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import Styles from "./Sidebar.module.scss"
function Sidebar() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("All Tasks");
  const sideBarItems = [
    {
      id: 1,
      icon: <LayoutDashboard strokeWidth={1.5} />,
      name: "All Tasks",
      link: "/tasks/all"
    },
    {
      id: 2,
      icon: <CalendarCheck2 strokeWidth={1.5} />,
      name: "Completed Tasks",
      link: "/tasks/completed"
    },
    {
      id: 3,
      icon: <CalendarClock strokeWidth={1.5} />,
      name: "Pending Tasks",
      link: "/tasks/pending"
    },
    {
      id: 4,
      icon: <TimerOff strokeWidth={1.5} />,
      name: "Missed Deadline",
      link: "/tasks/incomplete"
    }
  ]
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
        <span ><Avatar alt="Reyna Royce" src="/static/images/avatar/1.jpg" /></span>
        <span>
          Reyna Royce
        </span>

      </div>
    </aside>
  )
}

export default Sidebar