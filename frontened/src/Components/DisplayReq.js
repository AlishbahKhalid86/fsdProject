import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Display.css';
import Navbar from './Navbar';
import Footer from './Footer';
import DonorBackground from "../Assets/donor-background.png";

const Display = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/requests');
        setRequests(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className='request-table'>
      <div className='nav-container'>
        <Navbar/>
      </div>
      <div className="donor-background">
        <img src={DonorBackground} className="home-bannerImage" alt="donor" />
      </div>
      <div className='table-data'>
        <table>
          <caption>
            Blood Requests Data
          </caption>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Blood Group</th>
            <th>Quantity</th>
            <th>Address</th>
          </tr>
          {requests.map(request => (
            <tr key={request._id}>
              <td>{request.name}</td>
              <td>{request.contact}</td>
              <td>{request.bloodgroup}</td>
              <td>{request.quantity}</td>
              <td>{request.address}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
}

export default Display;