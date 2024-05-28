import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

import Donation from './Components/Donation';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import About from './Components/About';
import Request from './Components/Request'
import Work from './Components/Work'
import DisplayDon from './Components/DisplayDon'
import DisplayReq from './Components/DisplayReq'
import Mapp from './Components/Mapp'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<App />} />
        <Route path='/donation'element={<Donation/>}/>
        <Route path='/request'element={<Request/>}/>
        <Route path='/work'element={<Work/>}/>
        <Route path='/displaydon'element={<DisplayDon/>}/>
        <Route path='/displayreq'element={<DisplayReq/>}/>
        <Route path='/mapp'element={<Mapp/>}/>

        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
