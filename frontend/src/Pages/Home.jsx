import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getparkedcars")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col relative'>
      <h1 className='top-10 absolute'>Selected: {value}</h1>
      <div className='flex flex-row flex-wrap w-[50%] gap-5 h-[70%] justify-center items-center'>
        {[...Array(16)].map((_, index) => {
          const parkedCar = data.find(car => car.parkingnumber === index + 1);
          return (
            <div key={index} 
              className='border w-[20%] h-[20%] hover:scale-110 rounded-2xl active:scale-105 transition-all duration-100 overflow-hidden flex justify-center items-center' 
              onClick={() => setValue(index + 1)}>
              {parkedCar ? (
                <img src={parkedCar.carpicture} alt='Car' className='w-full h-full object-cover' />
              ) : (
                <p className='bg-gradient-to-r from-green-300 to-green-600 w-full h-full flex justify-center items-center'>Available</p>
              )}
            </div>
          );
        })}
      </div>
      <div className='gap-10 flex'>
        <button className='border px-18 py-4 mt-4 hover:bg-gray-400 transition-all duration-300 rounded-xl' onClick={() => navigate('/park', { state: { value } })}>BOOK</button>
        <button className='border px-18 py-4 mt-4 hover:bg-gray-400 transition-all duration-300 rounded-xl' onClick={() => navigate('/exit', { state: { value } })}>EXIT</button>
      </div>
    </div>
  );
}

export default Home;
