import React, { useState } from 'react'
import { Star } from 'lucide-react';
import { Trash } from 'lucide-react';



function TaskCard({ title, desc, priority, pin, due, setOpenTask }, props) {
   


    return (
        <div
            className='flex  flex-col gap-2.5 p-1 transition-all duration-150 cursor-pointer  border-3  border-red  h-50 w-80 bg-[#1F1F1F]  border-[#1F1F1F]  hover:scale-105 '
            onClick={() => { setOpenTask({
                showBackdrop: true,
                content: {title, desc, priority, pin, due}
            }) }}
        >
            <div className='flex items-center justify-between h-fit w-full  '>
                <p
                    className='font-bold text-lg'
                >
                    {title}
                </p>

                {pin ? <Star size={20} fill='#FFE604' color='#FFE604' /> : <Star size={20} color='#FFE604' />}

            </div>
            <div>
                <p
                    className='text-[#A9A9A9] text-sm'
                >
                    {desc.length > 200 ? `${desc.slice(0, 200)}...` : desc}
                </p>
            </div>
            <div
                className='flex justify-between mb-0 mt-auto'
            >
                <p className='text-[#646464] text-xs font-bold'>{due}</p>
                <p
                    className={`text-xs font-bold ${priority.toLowerCase() == "high" ? "text-red-500" :
                        priority.toLowerCase() == "medium" ? "text-yellow-500" :
                            "text-green-500"
                        }`}
                >
                    {priority}
                </p>
                <Trash />

            </div>

            
        </div>
    )
}

export default TaskCard