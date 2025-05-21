import React, { useEffect } from 'react'
import { Star } from 'lucide-react';
import { Trash } from 'lucide-react';

import Styles from './TaskCard.module.scss'



function TaskCard({ id, title, desc, priority, pin, due, setOpenTask, deleteTask, togglePin }, props) {
   


    return (
        <div
            className={Styles.taskCardContainer}

        >
            <div className={Styles.titleContainer}>
                <p>
                    {title}
                </p>

                {pin ? <Star onClick={()=>{togglePin(id)}} style={{cursor:"pointer"}} size={20} fill='#FFE604' color='#FFE604' /> : <Star onClick={()=>{togglePin(id)}} size={20} style={{cursor:"pointer"}} color='#FFE604' />}

            </div>
            <div onClick={setOpenTask} className={Styles.descriptionContainer}>
                <p>
                    {desc.length > 200 ? `${desc.slice(0, 200)}...` : desc}
                </p>
            </div>
            <div
                className={Styles.footerContainer}
            >
                <p className='text-[#646464] text-xs font-bold'>{due}</p>
                <p
                    style={{
                        color: priority.toLowerCase() === "high" ?
                            "red" : priority.toLowerCase() === "medium" ?
                                "yellow" : "#65fe08"

                    }}
                >
                    {priority}
                </p>
                <Trash style={{cursor:"pointer"}} onClick={()=>{deleteTask(id)}} />
            </div>

        </div>
    )
}

export default TaskCard