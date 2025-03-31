import React from 'react'
import { useLocation } from 'react-router-dom'
function Ticket() {
    const location = useLocation()
    let data = location.state;
    console.log(data.carnumber)
  return (
    <div className='h-screen w-screen flex justify-center items-center border-b-white relative '>
      <div className=' after:border-l before:border-r w-[50%] flex overflow-hidden justify-center flex-col items-center font-medium text-5xl rounded-br-4xl rounded-tl-4xl p-20 relative bg-gradient-to-r from-gray-300 to-yellow-100 after:content-[""] after:bg-white after:rounded-l-full after:w-19 after:right-0 after:h-44  after:absolute before:content-[""] before:absolute before:bg-white before:w-19 before:h-44 before:left-0 before:rounded-r-full '  >
        <p className='text-purple-400'>Slot number : {data.number}</p>
        <p className='text-red-600'>User : {data.username}</p>
        <p className='text-green-400'>Car plate no : {data.carnumber}</p>
        <p>Phone : {data.userphone}</p>
        <p className='absolute left-[3%] bottom-2 text-[80%]'>{data.date}</p>
        <p className='absolute right-[3%] bottom-2 text-[75%]'>{data.enteredtime}</p>
      </div>
    </div>
  )
}

export default Ticket
