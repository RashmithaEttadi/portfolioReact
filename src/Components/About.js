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
            Hi, My name is <b>Rashmitha Ettadi.</b> I'm a <b>software developer.</b> I have graduated with master's degree in computer science from Purdue University, Indianapolis, IN, USA. <br/>
            I worked as an <b>application developer</b> at Accenture, India.<br></br>
            I worked on projects in <b>Java</b>, <b>Spring Boot</b> , <b>Java Script</b> and databases like <b>MYSQL</b> and <b>Oracle</b>.
            I like challenging tasks. <br/>
            I love the process of creating software products and services that will 
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
        <Skills skill='Javascript' />
        <Skills skill='React'/>
        <Skills skill='SpringBoot' />
        <Skills skill='MongoDB'/>
        <Skills skill='Oracle' />
        <Skills skill='MySQL'/>
        <Skills skill='C++' />
        <Skills skill='Git' />
        <Skills skill='Postman' />
        
      </div>
      </section>
  )
}

export default About