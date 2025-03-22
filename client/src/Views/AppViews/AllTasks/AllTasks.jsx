import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from './Data'
import { CirclePlus } from 'lucide-react';
import TaskCard from '../../../Components/TaskCard/TaskCard';

function AllTasks() {
    const { type } = useParams();  // Capture "all" or "pending"
    const taskType = type || "all";

    return (
        <div className='text-white w-full flex flex-col gap-4.5 '>
            <div className='w-full'>
                <p className='font-bold text-3xl w-full'>{data.title}</p>
            </div>
            <div className='h-full flex gap-5'>
                {
                    data.content.map((cont, index) => (
                        <TaskCard
                            key={cont.id}
                            title={cont.name}
                            desc={cont.description}
                            priority={cont.priority}
                            pin={cont.pin}
                            due={cont.due}
                        />
                    ))
                }
               {taskType === "all" && <div
                    className='flex justify-center transition-all duration-150  items-center border-3 cursor-pointer border-red  h-50 w-80 border-[#646464] rounded-md border-dashed text-[#646464] hover:border-white hover:text-white'
                >
                    <CirclePlus size={50} />
                </div>}

            </div>

        </div>
    )
}

export default AllTasks