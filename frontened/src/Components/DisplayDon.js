import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Display.css';
import Navbar from './Navbar';
import Footer from './Footer';
import DonorBackground from "../Assets/donor-background.png";

const Display = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/donations');
        setDonations(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDonations();
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
            Donations Data
          </caption>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Blood Group</th>
          </tr>
          {donations.map(donation => (
            <tr key={donation._id}>
              <td>{donation.name}</td>
              <td>{donation.email}</td>
              <td>{donation.city}</td>
              <td>{donation.address}</td>
              <td>{donation.contact}</td>
              <td>{donation.age}</td>
              <td>{donation.bloodgroup}</td>
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