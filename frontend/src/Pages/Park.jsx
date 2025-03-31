import React, { use, useEffect } from 'react'
import { useState } from 'react';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import {toast , ToastContainer} from "react-toastify"
import { useNavigate } from 'react-router-dom';
function Park() {
    const [parkingNumber, setparkingNumber] = useState();
    const [username, setusername] = useState();
    const[carnumber,setcarnumber] = useState()
    const [userphone,setuserphone] = useState()
    const[carpicture,setcarpicture] = useState()
    let [enteredtime, setenteredtime] = useState()
    const [date,setdate] = useState()
    const location = useLocation()
    let number = location.state.value;
    let occupied = location.state.occupied;
    const navigate = useNavigate()

    
    // setparkingNumber(number)
  
    // const[para,setpara] = useState(false)

    useEffect(()=>{
    setenteredtime(Intl.DateTimeFormat('en-IN',{ minute:'2-digit', hour:'2-digit' }).format(new Date()))
    },[date])
    const handlesubmit = ()=>{
      console.log(carpicture)
      if(!carpicture){
        toast.error("All fields required")
      }
      let file = new FormData()
      file.append("file", carpicture[0]); // Append the file
      file.append("parkingNumber", number); // Append other fields
      file.append("username", username);
      file.append("carnumber", carnumber);
      file.append("userphone", userphone);
      file.append("enteredtime", enteredtime);
      file.append("date", date);
     
     console.log(file)
     axios.defaults.withCredentials=true
        axios.post("http://localhost:8080/newparking",file,{
          headers:{
            "Content-Type":"multipart/form-data"
          }} ).then((res)=>{
            console.log(res.data)
          if(res.data == 'Space occupied'){
            toast.error("Space occupied",{autoClose:2000})
          }else{
          navigate('/ticket',{state:{username,carnumber,userphone ,date , enteredtime, number}})
          }
        })
      
    }
  return (
    <div className='w-[100%] h-screen flex justify-center items-center py-56 bg-gradient-to-r from-teal-400 to-yellow-200 z-0' >
      <ToastContainer/>
      {
        occupied? 
      <p className=' text-[2400%]  text-red-400 z-20 ' >OCUUPIED</p> : ""

      }
      <div className='p-34 border shadow-2xl rounded-2xl  absolute z-100 bg-gradient-to-r to-teal-400 from-yellow-200' >
      <div className="flex flex-col h-[100%] font-roboto items-center  justify-evenly  gap-y-10 z-30 blur-none"  >
        {/* <label htmlFor="number" className='text-5xl w-fit  h-fit'>parkingNumber</label> */}
        <input type='number' id='number' className='border outline-0  rounded-full h-14  w-96 pl-5  focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out text-center' value={number} placeholder="Enter the parking number" onChange={e=>setparkingNumber(e.target.value)}/>
        <input type="text" className="border  outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out" placeholder="Enter the username" onChange={e=>setusername(e.target.value)}/>
        <input type="text"className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out '  placeholder="Enter carnumber" onChange={e=>setcarnumber(e.target.value)}/>
        <input type="text"className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out' placeholder="Enter phone number" onChange={e=>setuserphone(e.target.value)}/>
        <input type="file"className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out' onChange={e=>setcarpicture(e.target.files)} />
        <input type="date" className='border outline-0 rounded-full h-14  w-96 pl-5 focus:bg-gradient-to-r from-orange-200 focus:transition-all focus:duration-300 ease-in-out' onChange={(e)=>{setdate(e.target.value)}}/>
      <button className='border px-5 py-2 hover:bg-white transition-all rounded-md' onClick={handlesubmit} >Submit</button>
      </div>
      </div>
      
      {/* <button onClick={handlesubmit} >Submit</button> */}
    </div>
  )
}

export default Park
