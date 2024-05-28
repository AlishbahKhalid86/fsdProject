import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup';
import Login from './Login/Login';
import Signup from './Signup/SignUp';
import App from '../App';

function Routes() {
return(
  <div className="Routes">
    <Routes>
      <Route path="/" element={<LoginSignup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
    <App/>
  </div>
);
}

export default Routes;