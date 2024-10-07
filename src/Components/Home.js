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
           <h2><a href="https://www.credly.com/badges/80029664-63d9-4424-a46f-61eccf3e6b5d" target='_blank' rel="noopener noreferrer">Certified AWS Cloud Solutions Architect.</a></h2>
            <br/>
          <Socials/>

        </div>
       
          <Lottie 
          className="illustration" 
          animationData={spaceGirl} 
          loop={true} 
        />
     
      </div>
    </div>
  )
}

export default Home