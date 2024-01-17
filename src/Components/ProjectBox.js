import React from 'react';
import {FaGithub} from "react-icons/fa";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    PortfolioOptimizationDesc : "Developed a machine learning framework to enhance portfolio optimization through Reinforcement Learning. Employed Generative Adversarial Networks (GANs) to generate synthetic stock price data for training the RL agents - Advanced Actor Critic (A2C) and Deep Deterministic Policy Gradients (DDPG), and conducted a comparative analysis with training on actual data.",
    PortfolioOptimizationGithub : "https://github.com/RashmithaEttadi/Financial_Portfolio_optimization_using_GAN_and_RL",
  
    
    EVotingDesc:"Created a secure remote e-voting system that adheres to CIA security policies. Ensured the integrity of user votes by employing cryptographic techniques such as secure multi-party multiplication, Pallier cryptosystem, and mutual lock voting, thereby guaranteeing accurate vote counts without any alterations.This project was made to understand cryptographic techniques.",
    EVotingGithub:"https://github.com/RashmithaEttadi/EVotingUsingHomomorphicEncryption",
    

    GestureRecognitionDesc : "Implemented OpenCV functions and pyautogui library for gesture recognition. Hand gestures in a video are represented by text. This project was made to understand different hand segmentation methods in computer vision.",
    GestureRecognitionGithub : "https://github.com/RashmithaEttadi/HandGestureRecognition",
   

    FaceDetectionDesc:" Face, Hands and Shoulder positions in a video are detected and tracked using viola jones algorithm and mediapipe library. This project was made to understand Haar-like features, feature extraction from an image and video.",
    FaceDetectionGithub:"https://github.com/RashmithaEttadi/FaceDetectionAndTracking",
  
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox