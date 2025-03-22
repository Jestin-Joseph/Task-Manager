import React, { useState } from 'react'

//icons
import { LayoutDashboard } from 'lucide-react';
import { CalendarCheck2 } from 'lucide-react';
import { TimerOff } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import { Dot } from 'lucide-react';


import Avatar from '@mui/material/Avatar';
// w-20 hover:
function Sidebar() {
  const [selected, setSelected] = useState("All Tasks");
  const sideBarItems = [
    {
      id: 1,
      icon: <LayoutDashboard strokeWidth={1.5} />,
      name: "All Tasks"
    },
    {
      id: 2,
      icon: <CalendarCheck2 strokeWidth={1.5} />,
      name: "Completed Tasks"
    },
    {
      id: 3,
      icon: <CalendarClock strokeWidth={1.5} />,
      name: "Pending Tasks"
    },
    {
      id: 4,
      icon: <TimerOff strokeWidth={1.5} />,
      name: "Missed Deadline"
    }
  ]
  return (
    <aside class="bg-[#121212] text-[#E8EAED] p-6 h-screen transition-all delay-150 duration-300 ease-in-out top-0 z-50 left-0 w-20 hover:w-64 group fixed border-r-[#535353] border-r-2">
      <nav class=' mt-25 flex gap-10 flex-col'>
        {
          sideBarItems.map((item, index) => (
            <div
              key={item.id}
              class="flex gap-3.5 cursor-pointer"
              onClick={() => { setSelected(item.name) }}
            >
              <span class="flex ">
                <span class="absolute left-0">
                  {item.name === selected && <Dot color='red' strokeWidth={3} />}
                </span>
                {item.icon}
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity delay-250 duration-300 whitespace-nowrap">
                {item.name}
              </span>



            </div>
          ))
        }
      </nav>
      <div class='absolute bottom-0 left-0 p-2 border-t-[#535353]  w-full flex gap-3.5 border-t-2  '>
        <span class="ml-2"><Avatar alt="Reyna Royce" src="/static/images/avatar/1.jpg" /></span>
        <span className="opacity-0  flex items-center  group-hover:opacity-100 transition-opacity delay-250 duration-300 whitespace-nowrap ">
          Reyna Royce
        </span>

      </div>
    </aside>
  )
}

export default Sidebar