import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {

    const workInfoData=[
        {
        image:PickMeals,
        title: "Blood Request",
        text: "Fill out a request form with the necessary information about the required blood type and urgency.",
        },

        {
          image:ChooseMeals,
          title: "Partner Hospitals",
          text: "Our partner hospitals play a crucial role in ensuring that blood donation is not only efficient but also safe and beneficial for all parties involved.",
          },

          {
            image:DeliveryMeals,
            title: "Fast Deliveries",
            text: "At Qatra, we understand that in medical emergencies, time is of the essence. Ensuring that blood is delivered quickly and safely can make the difference between life and death.",
            },

    ]

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
          <h1 className='primary-heading'>How We Are Working</h1>
          <p className='primary-text'>
          At Qatra, we have developed a seamless and efficient process to ensure that blood donation is accessible and hassle-free for both donors and recipients.
           Here’s how we are working to save lives, one drop at a time
          </p>
      </div>
      
        <div className='work-section-bottom'>
          {
          workInfoData.map((data)=>(
            <div className='work-section-info'>
              <div className='info-boxes-img-container'>
                <img src={data.image} alt='' />
                </div>
                <h2> {data.title} </h2>
                <p>{data.text}</p>
        </div>
          ))};
    </div>
    </div>
  )
}

export default Work;