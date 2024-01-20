import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import womencoder from '../LottieFiles/womencoder.json';

const About = () => {
  return (
    <section id='About'>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to know me!</h1>
          <p>
            Hi, my name is <b>Rashmitha Ettadi.</b> I'm a <b>Java developer.</b> I'm pursuing master's in computer science at IUPUI, Indianapolis, IN, USA. <br/>
            I worked as an <b>application developer</b> at Accenture, India.<br></br>
            I worked on projects in <b>Java</b> and <b>Spring Boot</b> and known as backend developer.
            I like challenging tasks. I love the process of creating software products and services that will 
            positively impact people's lives.<br />
            I am interested in becoming a Full-Stack developer and started working on 
            projects in <b>React</b> to learn Front-end frameworks.<br />
            Artificial Intelligence and Machine Learning technologies fascinates me and would love to explore and learn more.
            </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={womencoder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
      
        <Skills skill='Java'/>
        <Skills skill='Python' />
        <Skills skill='SpringBoot' />
        <Skills skill='Oracle' />
        <Skills skill='MySQL'/>
        <Skills skill='React'/>
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Git' />
        <Skills skill='Postman' />
        
      </div>
      </section>
  )
}

export default About