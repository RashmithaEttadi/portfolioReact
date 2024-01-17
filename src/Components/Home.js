import React from 'react';
import Lottie from  "lottie-react";
import spaceGirl from "../LottieFiles/spaceGirl.json";
import Typed from "./Typed.js";
import Socials from "./Socials.js";

const Home = () => {
  return (
    <div id='Home'>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hello!</h1>
          <h1>I'm <b>RASHMITHA ETTADI</b></h1>
           
           <h1>I am into  <Typed/> </h1> 
          

          <Socials/>

        </div>
       
          <Lottie 
          className="illustration" 
          animationData={spaceGirl} 
          loop={true} 
        />
     
      </div>

      {/* <div className='AboutPage'> */}
        {/* <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of creating software products and services that will 
            positively impact people's lives.
            I like challenging tasks.<br /><br />
            I am fluent in <b>Java</b> and <b>Spring Boot</b> and known as backend developer.
            I am interested in becoming a Full-Stack developer and started working on 
            projects in <b>React, Javascript </b> <br />
            I plan to learn <b>MERN</b> stack in the near future. <br /><br />  
          </p>
        </div> */}
        {/* <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt> */}
      {/* </div> */}
    </div>
  )
}

export default Home