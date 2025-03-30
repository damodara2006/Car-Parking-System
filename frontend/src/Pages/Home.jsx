import React from 'react'
import { useState } from 'react'
function Home() {
    const [value , setvalue] = useState(1) 
    console.log(value)
  return (
    <div className='w-screen h-screen flex justify-center  items-center' >
      <h1>{value}</h1>
      <div className='flex flex-row flex-wrap shrink-0 w-[50%] gap-5  h-[70%] justify-center items-center '>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(1)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 '  onClick={()=>setvalue(2)}></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(3)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(4)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(5)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(6)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(7)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 '  onClick={()=>setvalue(8)}></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(9)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(10)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(11)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 '  onClick={()=>setvalue(12)}></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(13)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 '  onClick={()=>setvalue(14)}></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 ' onClick={()=>setvalue(15)} ></div>
        <div className='border w-[20%] h-[20%] hover:scale-[130%] rounded-2xl active:scale-[112%] transition-all duration-100 '  onClick={()=>setvalue(16)}></div>
      </div>
    </div>
  )
}

export default Home
