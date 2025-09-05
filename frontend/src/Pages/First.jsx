import React from 'react';
import { useNavigate } from 'react-router-dom';

const First = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home'); // change the route as needed
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Parking Management System</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to the Parking Management System — your smart solution to handle parking with ease.
          Track slot availability in real time, reserve spots, calculate parking fees, and let admins manage
          the entire system efficiently. View history, payments, and occupancy reports with a few clicks.
        </p>
        <ul className="text-left text-gray-600 list-disc list-inside mb-6">
          <li>📍 Real-time tracking of parking availability</li>
          <li>🅿️ Reserve spots and calculate fees</li>
          <li>👨‍💼 Admin control over slots and payments</li>
          <li>📊 View parking history and reports</li>
        </ul>
        <button
          onClick={handleGetStarted}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl text-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default First;
