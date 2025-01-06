import React from 'react';
import {FaGithub} from "react-icons/fa";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    PortfolioOptimizationDesc : "Developed a machine learning framework to enhance portfolio optimization through Reinforcement Learning. Employed Generative Adversarial Networks (GANs) to generate synthetic stock price data for training the RL agents - Advanced Actor Critic (A2C) and Deep Deterministic Policy Gradients (DDPG), and conducted a comparative analysis with training on actual data.",
    PortfolioOptimizationGithub : "https://github.com/RashmithaEttadi/Financial_Portfolio_optimization_using_GAN_and_RL",
  
    
    DataAnalysisProjectDesc:"Engineered machine learning models with Linear Regression, SVR, and Random Forest to forecast power consumption across various zones using environmental data. Improved model accuracy by optimizing performance and visualized outcomes using clear and insightful charts",
    DataAnalysisProjectGithub:"https://github.com/RashmithaEttadi/DataScienceProject",
    

    MovieRecommendationDesc : "Developed a movie recommendation system using MongoDB, implementing CRUD operations and RESTful APIs to manage movie data, including titles, genres, and directors. Utilized aggregation pipelines for efficient querying and search functionality based on user preferences, leading to a more personalized movie recommendation experience.",
    MovieRecommendationGithub : "https://github.com/RashmithaEttadi/MovieRecommendationSystem",
   

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