import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex flex-wrap screen mt-10 justify-between gap-5'>
        <div className='flex items-start flex-col rounded-xl py-6 px-9 w-[45%]  bg-yellow-400'>
             <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
             <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='flex items-start flex-col rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
             <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
             <h3 className='text-xl font-medium'>Accept Task</h3>
        </div>

        <div className='flex items-start flex-col rounded-xl py-6 px-9 w-[45%] bg-green-400'>
             <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
             <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='flex items-start flex-col rounded-xl py-6 px-9 w-[45%] bg-red-400'>
             <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
             <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
    
  )
}

export default TaskListNumber