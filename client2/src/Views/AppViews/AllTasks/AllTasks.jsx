import React, { useEffect, useState } from 'react'


import Styles from './AllTasks.module.scss'
import useAPI from '../../../services/useAPI';
import ElTable from '../../../Components/ElTable/ElTable';
import ElBoard from '../../../Components/ElBoard/ElBoard';
import ElToggle from '../../../Components/ElToggle/ElToggle';

// import { api } from '../../../services/api';


function PrioritySelect({ value, onChange }) {
  return (
    <select style={{ padding: '0.5em', backgroundColor: 'transparent', color: 'inherit', borderRadius: '5px' }} value={value} onChange={(e) => onChange(e.target.value)}>
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>
  );
}

function StatusMenu({ value, onChange }) {
  return (
    <select style={{ padding: '0.5em', backgroundColor: 'transparent', color: 'inherit', borderRadius: '5px' }} value={value} onChange={(e) => onChange(e.target.value)}>
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
    <input style={{ padding: '0.5em', backgroundColor: 'transparent', color: 'inherit', borderRadius: '5px', border: 'inherit' }} type='date' value={yyyyMMdd} onChange={(e) => onChange(e.target.value)} />
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

const COLORS = {
  activeBg: "#1E88E5",   // blue for active
  inactive: "transparent", // gray for inactive
};

function AllTasks() {

  const [taskData, setTaskData] = useState();
  const [viewType, setViewType] = useState('List')
  // const [openTask, setOpenTask] = useState({
  //     showBackdrop: false,
  //     content: null,
  // });

  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useAPI('/user/tasks')
  const statuses = [...new Set(taskData?.map(item => item?.status))];



  useEffect(() => {
    if (data) {
      setTaskData(data)
    }
  }, [data])

  function updateStatus(id, status) {
    console.log(`change ${id} to ${status}`)
    setTaskData(prev =>
      prev?.map(d => d.id === id ? { ...d, status } : d)
    );
  }

  return (
    <div
      className={Styles.allTasks_ViewContainer}
    >
      <div className={Styles.allTasks_TitleContainer}>
        <p>All Tasks</p>
        <div className={Styles.toggleButton} size='small'>
          <ElToggle
            leftLabel="List"
            leftValue="List"
            rightLabel="Board"
            rightValue="Board"
            value={viewType}
            onChange={setViewType}          
           
          />
        </div>


      </div>
      <div className={Styles.allTasks_TasksContainer}>
        {
          viewType === 'List' ?
            <ElTable
              columns={columns}
              content={['title', 'description', 'priority', 'due_date', 'status']}
              components={components}
              data={taskData}
              onChange
            /> :
            <ElBoard
              boardTypes={statuses}
              data={taskData}
              onUpdateStatus={updateStatus}
            />
        }

      </div>
    </div>
  )
}

export default AllTasks