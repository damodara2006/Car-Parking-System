import React from 'react'
import { useState } from 'react';
function Park() {
    const [parkingNumber, setparkingNumber] = useState();
    const [username, setusername] = useState();
    const[carnumber,setcarnumber] = useState()
    const [userphone,setuserphone] = useState()
    const[carpicture,setcarpicture] = useState()
    const [enteredtime, setenteredtime] = useState()
    const [date,setdate] = useState()
    const[para,setpara] = useState(false)
  return (
    <div className='w-[100%] h-screen flex justify-center items-center py-56' >
      <div className="flex flex-col h-[100%] font-roboto items-center  justify-evenly  "  >
        {/* <label htmlFor="number" className='text-5xl w-fit  h-fit'>parkingNumber</label> */}
        <input type='number' id='number' className='border outline-0  rounded-full h-14  w-96 pl-5  focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out' placeholder="Enter the parking number"/>
        <input type="text" className="border  outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out" placeholder="Enter the username" />
        <input type="text"className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out '  placeholder="Enter carnumber"/>
        <input type="text"className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out' placeholder="Enter phone number" />
        <input type="file"className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out'  />
        <input type="date" className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out' placeholder="Enter the parking number"/>
      </div>
    </div>
  )
}

export default Park
