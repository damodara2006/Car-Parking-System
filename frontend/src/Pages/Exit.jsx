import React, { use, useEffect } from 'react'
import { useState } from 'react';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import {toast , ToastContainer} from "react-toastify"
import { useNavigate } from 'react-router-dom';
function Exit() {
    const [parkingNumber, setparkingNumber] = useState();
    const [username, setusername] = useState();
    const[carnumber,setcarnumber] = useState()
    const [userphone,setuserphone] = useState()
    const[carpicture,setcarpicture] = useState()
    let [enteredtime, setenteredtime] = useState()
    const [date,setdate] = useState()
    const location = useLocation()
    let number = location.state.value;
    const navigate = useNavigate()

    
    // setparkingNumber(number)
  
    // const[para,setpara] = useState(false)

    useEffect(()=>{
    setenteredtime(Intl.DateTimeFormat('en-IN',{ minute:'2-digit', hour:'2-digit' }).format(new Date()))
    },[date])
    const handlesubmit = ()=>{
        console.log("jj")
     axios.post("http://localhost:8080/exitparking",{ parkingNumber:number,username:username,userphone:userphone,carnumber:carnumber , date:date , exittime:enteredtime})
     .then(res=>{
        if(res.status == 201){
            toast.error(res.data)
        }
        if(res.data == "Thank you for visiting"){
            toast.success("Thank you for visiting")
        }
        console.log(res)})
    }
  return (
    <div className='w-[100%] h-screen flex justify-center items-center py-56 bg-gradient-to-r from-teal-500 via-green-300 to-orange-200' >
      <ToastContainer/>
      <div className='border p-34 rounded-2xl shadow-2xl bg-gradient-to-r to-teal-500 via-green-300 from-orange-200'>
      <div className="flex flex-col h-[100%] font-roboto items-center  justify-evenly gap-10 "  >
        {/* <label htmlFor="number" className='text-5xl w-fit  h-fit'>parkingNumber</label> */}
        <input type='number' id='number' className='border outline-0  rounded-full h-14  w-96 pl-5  focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out text-center' value={number} placeholder="Enter the parking number" onChange={e=>setparkingNumber(e.target.value)}/>
        <input type="text" className="border  outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out" placeholder="Enter the username" onChange={e=>setusername(e.target.value)}/>
        <input type="text"className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out '  placeholder="Enter carnumber" onChange={e=>setcarnumber(e.target.value)}/>
        
        <input type="text"className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out' placeholder="Enter phone number" onChange={e=>setuserphone(e.target.value)}/>
       <p>Enter the date that when you parked</p>
        <input type="date" className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out' onChange={(e)=>{setdate(e.target.value)}}/>
      <button className='border px-5 py-3 hover:bg-white rounded-md transition-all' onClick={handlesubmit} >Submit</button>
      </div>
      </div>
      
      {/* <button onClick={handlesubmit} >Submit</button> */}
    </div>
  )
}

export default Exit
