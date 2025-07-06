import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center px-4 pt-3'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 px-3 text-2xl font-semibold'> Make a youtube Video </h2>
            <p className='text-sm px-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nisi ab incidunt optio, mollitia possimus architecto odio corrupti saepe illum. Culpa qui voluptatem quos blanditiis iure! Tenetur itaque sed explicabo?
            </p>

            
             <div className='m-3 flex justify-between'>
                <button className='bg-green-600 p-2 rounded-sm'>Mark as Completed</button>
                <button className='bg-red-600 py-2 px-5  rounded-sm' >Mark as Failed</button>
            </div>
        </div>
  )
}

export default CompleteTask