import React from 'react'
import { useLocation } from 'react-router-dom'
function Ticket() {
    const location = useLocation()
    let data = location.state;
    console.log(data.carnumber)
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-r from-green-100'>
      <div className='border w-[50%] flex justify-center flex-col items-center font-medium text-5xl rounded-br-4xl rounded-tl-4xl p-20 relative bg-gradient-to-r from-gray-300 to-yellow-100'  >
        <p className='text-purple-400'>Slot number : {data.number}</p>
        <p className='text-red-600'>User : {data.username}</p>
        <p className='text-green-400'>Car plate no : {data.carnumber}</p>
        <p>Phone : {data.userphone}</p>
        <p className='absolute left-[3%] bottom-0 text-[80%]'>{data.date}</p>
        <p className='absolute right-[3%] bottom-1 text-[75%]'>{data.enteredtime}</p>
      </div>
    </div>
  )
}

export default Ticket
