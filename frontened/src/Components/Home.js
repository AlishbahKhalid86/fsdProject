import React from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerIamge from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Home = () => { // Corrected component name to start with uppercase
  const navigate = useNavigate();

  const handleDonation = () => {
    navigate("/donation");
  }

  const handleRequest = () => {
    navigate("/request");
  }
   
  return (
    <div className='home-container'> 
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt=''/> 
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Donate Blood and Save Humanity
          </h1>
          <p className='primary-text'>
            Providing a platform for the ones who are willing to donate and
            the ones who are in need of blood.
          </p>
          <div className='button-row'>
            <button className='secondary-button margin-right' onClick={handleDonation}>
              Donate Now
              <FiArrowRight/>
            </button>
            <button className='secondary-button' onClick={handleRequest}>
              Request Now
              <FiArrowRight/>
            </button>
        </div>


        </div>
        <div className='home-image-container'>
          <img src={BannerIamge} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Home; // Corrected export name to start with uppercase
