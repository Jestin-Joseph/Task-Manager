import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { data } from './Data'
import { CirclePlus } from 'lucide-react';
import TaskCard from '../../../Components/TaskCard/TaskCard';
import Backdrop from '@mui/material/Backdrop';

import Styles from './AllTasks.module.scss'
import ContentEditor from '../../../Components/Editor/ContentEditor';

function AllTasks() {
    const { type } = useParams();  // Capture "all" or "pending"
    const taskType = type || "all";

    const [taskData, setTaskData] = useState(data);
    const [openTask, setOpenTask] = useState({
        showBackdrop: false,
        content: null,
    });

    const updateTask = (updatedTask) => {
        const updatedContent = taskData.content.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTaskData({ ...taskData, content: updatedContent });
        setOpenTask({ ...openTask, content: updatedTask });
    };

    return (
        <div
            className={Styles.allTasks_ViewContainer}
        >
            <div className={Styles.allTasks_TitleContainer}>
                <p>{data.title}</p>
            </div>
            <div className={Styles.allTasks_TasksContainer}>
                {
                    taskData?.content.map((cont) => (
                        <TaskCard
                            key={cont.id}
                            title={cont.title}
                            desc={cont.description}
                            priority={cont.priority}
                            pin={cont.pin}
                            due={cont.due}
                            setOpenTask={() => setOpenTask({
                                showBackdrop: true,
                                content: cont
                            })}
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
                onClick={() => { console.log(openTask?.content) }}
            >
                <div
                    className={Styles.taskDetails}
                >
                    <ContentEditor
                        data={openTask?.content}
                        updateTask={updateTask}
                    />
                </div>

            </Backdrop>


        </div>
    )
}

export default AllTasks