import React, { useContext } from 'react'
import { Star } from 'lucide-react';
import { Trash } from 'lucide-react';

import Styles from './TaskCard.module.scss'
import { ThemeContext } from '../../StylingComponent/ThemeSettings/ThemeToggle';



function TaskCard({ id, title, desc, priority, pin, due, setOpenTask, deleteTask, togglePin, onChangeStaus }, props) {
    const { theme } = useContext(ThemeContext)

    const getPriorityStyle = (priority) => {
        const p = priority.toLowerCase();
        if (theme === "light") {
            return {
                high: { bg: "#ffebee", color: "#b71c1c" },  // light pink / deep red
                medium: { bg: "#fff8e1", color: "#ff6f00" },  // light amber / deep orange
                low: { bg: "#e8f5e9", color: "#1b5e20" }   // light green / deep green
            }[p];
        }

        // dark mode
        return {
            high: { bg: "#8b0000", color: "#ffcdd2" },  // deep red / light pink text
            medium: { bg: "#8b6b00", color: "#ffe082" },  // deep amber / light yellow
            low: { bg: "#1b5e20", color: "#a5d6a7" }   // deep green / light green text
        }[p];
    };

    const style = getPriorityStyle(priority);

    return (
        <div
            className={Styles.taskCardContainer}
            draggable
            onDragEnd={()=>{onChangeStaus(id)}}
            

        >
            <div className={Styles.titleContainer}>
                <p>
                    {title}
                </p>

                {pin ? <Star onClick={() => { togglePin(id) }} style={{ cursor: "pointer" }} size={20} fill='#FFE604' color='#FFE604' /> : <Star onClick={() => { togglePin(id) }} size={20} style={{ cursor: "pointer" }} color='#FFE604' />}

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
                        padding: '0.3em 0.4em',
                        borderRadius: '5px',
                        // backgroundColor:
                        //     priority.toLowerCase() === "high"
                        //         ? "#ffebee" // very light pink background
                        //         : priority.toLowerCase() === "medium"
                        //             ? "#fff8e1" // very light amber background
                        //             : "#e8f5e9", // very light green background
                        // color:
                        //     priority.toLowerCase() === "high"
                        //         ? "#b71c1c" // deep red text
                        //         : priority.toLowerCase() === "medium"
                        //             ? "#ff6f00" // deep amber/orange text
                        //             : "#1b5e20" // deep green text
                        backgroundColor: style.bg,
                        color: style.color
                    }}
                >
                    {priority}
                </p>
                <Trash style={{ cursor: "pointer" }} onClick={() => { deleteTask(id) }} />
            </div>

        </div>
    )
}

export default TaskCard