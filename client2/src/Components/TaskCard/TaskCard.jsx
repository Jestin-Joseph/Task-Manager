import React from 'react'
import { Star } from 'lucide-react';
import { Trash } from 'lucide-react';

import Styles from './TaskCard.module.scss'



function TaskCard({ title, desc, priority, pin, due, setOpenTask }, props) {



    return (
        <div
            className={Styles.taskCardContainer}
            onClick={() => {
                setOpenTask({
                    showBackdrop: true,
                    content: { title, desc, priority, pin, due }
                })
            }}
        >
            <div className={Styles.titleContainer}>
                <p>
                    {title}
                </p>

                {pin ? <Star size={20} fill='#FFE604' color='#FFE604' /> : <Star size={20} color='#FFE604' />}

            </div>
            <div className={Styles.descriptionContainer}>
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
                <Trash />
            </div>

        </div>
    )
}

export default TaskCard