import React from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const Employee = () => {
  return (
    <div>
        <div className='p-10 bg-black-400 h-screen'>
           <Header/>
           <TaskListNumber/>
           <TaskList/>
        </div>
    </div>
  )
}

export default Employee
