import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { data } from './Data'
import { CirclePlus } from 'lucide-react';
import TaskCard from '../../../Components/TaskCard/TaskCard';
import Backdrop from '@mui/material/Backdrop';

function AllTasks() {
    const { type } = useParams();  // Capture "all" or "pending"
    const taskType = type || "all";

    const [openTask, setOpenTask] = useState({
        showBackdrop: false,
        backdropDaat: {}
    });

    return (
        <div className='text-white w-full flex flex-col gap-4.5 '>
            <div className='w-full'>
                <p className='font-bold text-3xl w-full'>{data.title}</p>
            </div>
            <div className='h-full flex gap-5'>
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
                    className='flex justify-center transition-all duration-150  items-center border-3 cursor-pointer border-red  h-50 w-80 border-[#646464] rounded-md border-dashed text-[#646464] hover:border-white hover:text-white'
                >
                    <CirclePlus size={50} />
                </div>}

            </div>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={openTask.showBackdrop}
                // onClick={() => { setOpenTask({ showBackdrop: false }) }}
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