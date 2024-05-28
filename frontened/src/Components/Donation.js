import React from 'react';
import './Donation.css'; // Import your CSS file for styling
import Donor from "../Assets/donor.jpg";
import Oman from "../Assets/oman.jpg";
import Dubai from "../Assets/dubai.jpg";
import China from "../Assets/china.jpg";
import Iran from "../Assets/iran.jpg";
import DonorBackground from "../Assets/donor-background.png";
import Navbar from './Navbar';
import axios from "axios";
import { useState } from "react";
import Work from './Work';

const Donation = () => {

  const [data, setData] = useState({
		name: "",
		email: "",
		city: "",
		address: "",
    contact: "",
    age: "",
    bloodgroup: "",
	});
	//const [error, setError] = useState("");


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/donations";
			const { data: res } = await axios.post(url, data);
			alert('donation form submitted ');
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
          <h2 className='heading'>Become a Donor</h2>

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

            <label htmlFor='age'>Age:</label>
            <input
              type='text'
              name='age'
              id='age'
              value={data.age}
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

            <button type='submit'>Donate</button>
        </form>


            </div>
            <div className='image-container'>
              <img src={Donor} alt='Donation' />
            </div>
          </div>
          <div className="description-box">
            <p>Here are some of the hospitals we are linked with:</p>
          </div>
          <div className="megacard">
            <div className="marquee">
              <div className="card">
                <div className="image">
                  <img src={Dubai} alt="Dubai" />
                </div>
                <div className="description">
                  <p>Shifa International</p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={China} alt="China" />
                </div>
                <div className="description">
                  <p>PIMS</p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={Iran} alt="Iran" />
                </div>
                <div className="description">
                  <p>PAF Hospital</p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={Oman} alt="Oman" />
                </div>
                <div className="description">
                  <p>Holy Family</p>
                </div>
              </div>
            </div>
          </div>

          <div className='work-container'>
           <Work/>
          </div>

        </div>
  );
}

export default Donation;
