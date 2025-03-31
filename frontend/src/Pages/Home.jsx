import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [data, setData] = useState([]);
  const [occupied,setoccupied] = useState(false)
  useEffect(() => {
    axios.get("https://car-parking-system-backend.onrender.com/getparkedcars")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);
  
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col relative bg-gradient-to-r from-gray-400 via-cyan-400 to-gray-500'>
      <h1 className='top-10 absolute text-red-500 text-3xl'>Selected: <span className='text-black' >{value}</span></h1>
      <div className='flex flex-row flex-wrap w-[50%] gap-5 h-[70%] justify-center items-center'>
        {[...Array(16)].map((_, index) => {
          const parkedCar = data.find(car => car.parkingnumber === index + 1);
          console.log(parkedCar)
          return (
            <div key={index} 
              className='border w-[20%] h-[20%] hover:scale-[115%] rounded-2xl active:scale-105 transition-all duration-100 overflow-hidden flex justify-center items-center' 
              onClick={() => setValue(index + 1)}>
              {parkedCar ? (
                <img src={parkedCar.carpicture} alt='Car' className='w-full h-full object-cover' onClick={()=>setoccupied(true)} />
              ) : (
                <p className='bg-gradient-to-r from-green-400 to-green-700 w-full h-full flex hover:bg-gradient-to-r hover:from-green-100 hover:to-green-400 justify-center items-center transition-all duration-1000'>Available</p>
              )}
            </div>
          );
        })}
      </div>
      <div className='gap-10 flex'>
        <button className='border px-18 py-4 mt-4 hover:bg-gray-400 transition-all duration-300 rounded-xl bg-white' onClick={() => navigate('/park', { state: { value , occupied} })}>BOOK</button>
        <button className='border px-18 py-4 mt-4 hover:bg-gray-400 transition-all duration-300 rounded-xl bg-white' onClick={() => navigate('/exit', { state: { value } })}>EXIT</button>
      </div>
    </div>
  );
}

export default Home;
