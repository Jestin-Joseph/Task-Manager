import React, { useState } from 'react'
import Styles from './PendingTasks.module.scss'

import ElBoard from '../../../Components/ElBoard/ElBoard.jsx';
import { data } from './data.js'
function PendingTasks() {
  const [tasks, setTasks] = useState(data)
  const statuses = [...new Set(data.map(item => item.status))];


  function updateStatus(id, status) {
    console.log(`change ${id} to ${status}`)
    setTasks(prev =>
      prev.map(d => d.id === id ? { ...d, status } : d)
    );
  }
  return (
    <div className={Styles.PendingTasks_container}>
      <ElBoard
        boardTypes={statuses}
        data={tasks}
        onUpdateStatus={updateStatus}
      />
    </div>
  )
}

export default PendingTasks