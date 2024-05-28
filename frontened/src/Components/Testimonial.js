import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from 'react-icons/ai';


const Testimonial = () => {
  return  <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>
        At Qatra, the voices of our users reflect the heart of our mission. Here are some testimonials from our donors, recipients,
         and partners who have experienced the life-saving impact of our platform:
        </p>
    </div>
    <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt=''/>
        <p className='primary-text'>
        Donating through Qatra has been a seamless experience. The app makes it so easy to find nearby donation camps, and I love knowing that my blood is going directly to someone in need.
         It's incredibly fulfilling to be part of such a compassionate community.
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>Sulman Haider</h2>
    </div>

  </div>;
  
}

export default Testimonial;