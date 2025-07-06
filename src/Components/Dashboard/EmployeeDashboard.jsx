import React from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const Employee = ({data}) => {
  if (!data) {
    return <div>Loading employee data...</div>;
  }

  return (
    <div>
        <div className='p-10 bg-black-400 h-screen'>
           <Header data={data}/>
           <TaskListNumber data={data}/>
           <TaskList data={data}/>
        </div>
    </div>
  )
}

export default Employee
