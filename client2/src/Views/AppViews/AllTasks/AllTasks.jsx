import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { data } from './Data'
import { CirclePlus } from 'lucide-react';
import TaskCard from '../../../Components/TaskCard/TaskCard';
import Backdrop from '@mui/material/Backdrop';

import Styles from './AllTasks.module.scss'

function AllTasks() {
    const { type } = useParams();  // Capture "all" or "pending"
    const taskType = type || "all";

    const [openTask, setOpenTask] = useState({
        showBackdrop: false,
        backdropDaat: {}
    });

    return (
        <div 
        className={Styles.allTasks_ViewContainer}
        >
            <div className={Styles.allTasks_TitleContainer}>
                <p>{data.title}</p>
            </div>
            <div className={Styles.allTasks_TasksContainer}>
                {
                    data.content.map((cont) => (
                        <TaskCard
                            key={cont.id}
                            title={cont.name}
                            desc={cont.description}
                            priority={cont.priority}
                            pin={cont.pin}
                            due={cont.due}
                            setOpenTask={setOpenTask}
                        />
                    ))
                }
                {taskType === "all" && <div
                    className={Styles.allTasks_AddTaskBtn}
                >
                    <CirclePlus size={50} />
                </div>}

            </div>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={openTask.showBackdrop}
                onClick={() => { setOpenTask({ showBackdrop: false }) }}
            >
                <div 
                    className='bg-[#1F1F1F] w-[80%] h-[80%] rounded-md'
                >
                   
                </div>

            </Backdrop>


        </div>
    )
}

export default AllTasks