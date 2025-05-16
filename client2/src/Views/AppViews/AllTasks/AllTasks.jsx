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

    const deleteTask = (taskId) => {
        const updatedTasks = taskData.content.filter((task) =>
            task.id !== taskId
        );
        setTaskData({ ...taskData, content: updatedTasks })
    }

    const togglePin = (taskId) => {
        const updatedTasks = taskData.content.map((task) =>
            task.id === taskId ? { ...task, pin: !task.pin } : task
        );
        setTaskData({
            ...taskData,
            content: updatedTasks,
        });
    };

    const updateTask = (updatedTask) => {
        const taskExists = taskData.content.some(task => task.id === updatedTask.id);

        if (taskExists) {
            // Update existing task
            const updatedContent = taskData.content.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            );
            setTaskData({ ...taskData, content: updatedContent });
        } else {
            // Create new task
            const taskID = taskData.content.length + 1;
            const today = new Date().toLocaleDateString('en-US'); // e.g., "05/10/2025"
            const newTask = {
                ...updatedTask,
                id: taskID,
                pin: false,
                due: updatedTask.due || today
            };
            setTaskData({
                ...taskData,
                content: [...taskData.content, newTask]
            });
        }
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
                            id={cont.id}
                            title={cont.title}
                            desc={cont.description}
                            priority={cont.priority}
                            pin={cont.pin}
                            due={cont.due}
                            setOpenTask={() => setOpenTask({
                                showBackdrop: true,
                                content: cont
                            })}
                            deleteTask={deleteTask}
                            togglePin={togglePin}
                        />
                    ))
                }
                {taskType === "all" && <div
                    className={Styles.allTasks_AddTaskBtn}
                    onClick={() => setOpenTask({
                        showBackdrop: true,
                        content: {}
                    })}
                >
                    <CirclePlus size={50} />
                </div>}

            </div>

            {/* open the task */}
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={openTask.showBackdrop}
            >
                <div
                    className={Styles.taskDetails}
                >
                    <ContentEditor
                        data={openTask?.content}
                        updateTask={updateTask}
                        close={() => { setOpenTask({ showBackdrop: false }) }}
                    />
                </div>

            </Backdrop>


        </div>
    )
}

export default AllTasks