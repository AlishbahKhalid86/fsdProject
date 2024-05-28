import React from 'react';
import './Donation.css'; // Import your CSS file for styling
import Navbar from './Navbar';
import axios from "axios";
import { useState } from "react";
import DonorBackground from "../Assets/donor-background.png";
import Donor from "../Assets/donor.jpg";



const Request = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        city: "",
        address: "",
        contact: "",
        quantity: "",
        bloodgroup: "",
        });
      //const [error, setError] = useState("");
  
  
      const handleChange = ({ currentTarget: input }) => {
          setData({ ...data, [input.name]: input.value });
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              const url = "http://localhost:8080/api/requests";
              const { data: res } = await axios.post(url, data);
              alert('Request Form submitted ');
              console.log(res.message);
          } catch (error) {
              if (
                  error.response &&
                  error.response.status >= 400 &&
                  error.response.status <= 500
              ) {
                  alert(error.response.data.message);
              }
          }
      };
  
    
    return (
      
      <div className='donation-container'>
        <div className='nav-container'>
        <Navbar/>
        </div>
        <div className="donor-background">
          <img src={DonorBackground} className="home-bannerImage" alt="donor" />
        </div>
        <div className="top-row">
          <div className='record-box'>
            <h2 className='heading'>Request for Blood</h2>
  
            <form className='donor-form' onSubmit={handleSubmit}>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                name='name'
                id='name'
                value={data.name}
                onChange={handleChange}
              />
  
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                name='email'
                id='email'
                value={data.email}
                onChange={handleChange}
              />
  
              <label htmlFor='city'>City:</label>
              <input
                type='text'
                name='city'
                id='city'
                value={data.city}
                onChange={handleChange}
              />
  
              <label htmlFor='address'>Address:</label>
              <input
                type='text'
                name='address'
                id='address'
                value={data.address}
                onChange={handleChange}
              />
  
              <label htmlFor='contact'>Contact:</label>
              <input
                type='text'
                name='contact'
                id='contact'
                value={data.contact}
                onChange={handleChange}
              />
  
              <label htmlFor='quantity'>Age:</label>
              <input
                type='text'
                name='quantity'
                id='quantity'
                value={data.quantity}
                onChange={handleChange}
              />
  
              <label htmlFor='bloodgroup'>Blood Group:</label>
              <input
                type='text'
                name='bloodgroup'
                id='bloodgroup'
                value={data.bloodgroup}
                onChange={handleChange}
              />
  
              <button type='submit'>Request</button>
          </form>
              </div>

              <div className='image-container'>
                <img src={Donor} alt='Donation' />
              </div>
            </div>
          </div>
    );
  }
  
  export default Request;
  