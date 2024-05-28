import React from 'react'
import AboutBackgound from "../Assets/about-background.png";
import AboutBackgoundImage from "../Assets/about-background-image.png";
//import {BsFillPlayCircleFill} from"react-icons/bs";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleLearn = () => {
        navigate("/work");
      }


  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackgound}alt=''/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgoundImage} alt=''/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Saving one life means saving the entire humanity
            </h1>
            <p className='primary-text'>
            At Qatra, we believe that every drop of blood counts. Our mission is to create a reliable and responsive
             network of blood donors and recipients, ensuring that no one has to wait for the blood they need.
            </p>
            <p className='primary-text'>
            We are committed to fostering a community where donating blood is a simple and rewarding experience.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button' onClick={handleLearn}>Learn More</button>
                
            </div>

        </div>

    </div>
  )
}
export default About;