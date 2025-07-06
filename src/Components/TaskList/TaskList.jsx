import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import Failedtask from './Failedtask'
import NewTask from './NewTask'

const TaskList=({data})=> {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5  mt-10'>
         <AcceptTask/>
         <CompleteTask/>
         <Failedtask/>
         <NewTask/>

        


        
    </div>
  )
}

export default TaskList