import React, { useEffect, useState } from 'react'


import Styles from './AllTasks.module.scss'
import useAPI from '../../../services/useAPI';
import ElTable from '../../../Components/ElTable/ElTable';

// import { api } from '../../../services/api';


function PrioritySelect({ value, onChange }) {
    return (
      <select style={{padding:'0.5em', backgroundColor:'transparent', color:'inherit', borderRadius:'5px'}} value={value} onChange={(e) => onChange(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    );
  }

  function StatusMenu({ value, onChange }) {
    return (
      <select style={{padding:'0.5em', backgroundColor:'transparent', color:'inherit', borderRadius:'5px'}} value={value} onChange={(e) => onChange(e.target.value)}>
        <option>Open</option>
        <option>In Progress</option>
        <option>Blocked</option>
        <option>Done</option>
      </select>
    );
  }

  function DateSelect({ value, onChange }) {
    const yyyyMMdd = value
      ? new Date(value).toISOString().slice(0, 10)
      : "";

    return (
      <input style={{padding:'0.5em', backgroundColor:'transparent', color:'inherit', borderRadius:'5px', border: 'inherit'}} type='date' value={yyyyMMdd} onChange={(e) => onChange(e.target.value)} />
    )
  }

  const components = {
    priority: PrioritySelect, // editable
    status: StatusMenu,       // editable
    due_date: DateSelect

  };

  const columns = [
    { header: 'Title', accessor: 'title' },
    { header: 'Description', accessor: 'description' },
    { header: 'Priority', accessor: 'priority' },
    { header: 'Due', accessor: 'due_date', format: (v) => new Date(v).toLocaleDateString() },
    { header: 'Status', accessor: 'status' },
  ];

function AllTasks() {
   
    const [taskData, setTaskData] = useState();
    // const [openTask, setOpenTask] = useState({
    //     showBackdrop: false,
    //     content: null,
    // });

    // eslint-disable-next-line no-unused-vars
    const { data, loading, error } = useAPI('/user/tasks')



    useEffect(() => {
        if (data) {
            setTaskData(data)
        }
    }, [data])

    // const deleteTask = (taskId) => {
    //     const updatedTasks = taskData.content.filter((task) =>
    //         task.id !== taskId
    //     );
    //     setTaskData({ ...taskData, content: updatedTasks })
    // }

    // const togglePin = (taskId) => {
    //     const updatedTasks = taskData.content.map((task) =>
    //         task.id === taskId ? { ...task, pin: !task.pin } : task
    //     );
    //     setTaskData({
    //         ...taskData,
    //         content: updatedTasks,
    //     });
    // };



    // const createUpdateTask = (taskData) => {
    //     // console.log(taskData)
    //     api.post('/user/tasks/cp', taskData).then().catch()
    // }

    return (
        <div
            className={Styles.allTasks_ViewContainer}
        >
            <div className={Styles.allTasks_TitleContainer}>
                <p>All Tasks</p>
            </div>
            <div className={Styles.allTasks_TasksContainer}>
                <ElTable
                    columns={columns}
                    content={['title', 'description', 'priority', 'due_date', 'status']}
                    components={components}
                    data={taskData}
                    onChange
                />

            </div>

            {/* open the task */}
            {/* <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={openTask.showBackdrop}
            >
                <div
                    className={Styles.taskDetails}
                >
                    <ContentEditor
                        data={openTask?.content}
                        updateTask={createUpdateTask}
                        close={() => { setOpenTask({ showBackdrop: false, content: null }) }}
                    />
                </div>

            </Backdrop> */}

        </div>
    )
}

export default AllTasks