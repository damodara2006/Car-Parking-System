import React, { useEffect , useState } from 'react';
import axios from 'axios';
const Admin = () => {
      const [data, setData] = useState([]);
      const [cdata, setcData] = useState([]);
      const URL = "http://localhost:8080"
    
    useEffect(() => {
        axios.get([`${URL}/getparkedcars`,])
          .then(res => setData(res.data))
          .catch(err => console.error(err));
      }, []);

      useEffect(() => {
        axios.get([`${URL}/getparkedclients`,])
          .then(res => setcData(res.data))
          .catch(err => console.error(err));
      }, []);

      console.log(cdata)

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8 ">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parking Slot Management */}
          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Parked slots</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
             {
                data.map((user,key)=>(
                  <li key={key}>{user.username} <span className='font-bold ml-2'>{user.parkingnumber}</span></li>  
                ))
             }
            </ul>
          </div>


          {/* Reports */}
          <div className="bg-red-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
            {
                cdata.map((user,key)=>(
                  <li key={key}>{user.username}</li>  
                ))
             }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
