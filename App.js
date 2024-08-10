import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Shifter from './Components/Shifter';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <Shifter/>
      <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
            {/* Other routes here */}
        </Routes>
    </>
  );
}

export default App;
