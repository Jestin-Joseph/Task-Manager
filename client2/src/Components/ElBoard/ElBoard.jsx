import React, { useState } from 'react'
import Styles from './ElBoard.module.scss'
import { Typography } from '@mui/material';
import TaskCard from '../TaskCard/TaskCard.jsx';

function ElBoard({ boardTypes, data, onUpdateStatus }) {
    const [newStatus, setNewStatus] = useState('');

    function updateStatus(value) {
        if (value.status === newStatus) {
            return;
        }
        onUpdateStatus(value, newStatus)
    }

    return (
        <div
            className={Styles.ElBoard_Container}

        >
            {
                boardTypes.map((type, idx) => {
                    const filteredTasks = data.filter(task => task.status === type);
                    return (
                        <div
                            key={type} className={Styles.board}
                            // onTouchMove={()=>console.log(type)}
                            onDragOverCapture={(event) => {
                                event.preventDefault()
                                setNewStatus(type);
                            }}
                        >
                            <div className={Styles.boardHeading}>
                                <Typography sx={{ fontWeight: 600 }} variant='body2'>{type.toUpperCase()}</Typography>

                            </div>
                            <div className={Styles.boardContent}>
                                {
                                    filteredTasks.map(task => (
                                        <TaskCard
                                            id={task?.id}
                                            title={task?.title}
                                            desc={task?.description}
                                            priority={task?.priority}
                                            pin={task?.pin}
                                            due={task?.due_date}
                                            setOpenTask={() => { }}
                                            deleteTask={() => { }}
                                            togglePin={() => { }}
                                            onChangeStaus={updateStatus}

                                        />
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ElBoard;