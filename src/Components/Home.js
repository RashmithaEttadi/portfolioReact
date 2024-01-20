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
    </div>
  )
}

export default Home