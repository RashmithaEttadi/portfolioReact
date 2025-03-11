import React from 'react';
import {FaGithub} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    PortfolioOptimizationDesc : "Developed a machine learning framework to enhance portfolio optimization through Reinforcement Learning. Employed Generative Adversarial Networks (GANs) to generate synthetic stock price data for training the RL agents - Advanced Actor Critic (A2C) and Deep Deterministic Policy Gradients (DDPG), and conducted a comparative analysis with training on actual data.",
    PortfolioOptimizationGithub : "https://github.com/RashmithaEttadi/Financial_Portfolio_optimization_using_GAN_and_RL",
  
    
    DataAnalysisProjectDesc:"Engineered machine learning models with Linear Regression, SVR, and Random Forest to forecast power consumption across various zones using environmental data. Improved model accuracy by optimizing performance and visualized outcomes using clear and insightful charts",
    DataAnalysisProjectGithub:"https://github.com/RashmithaEttadi/DataScienceProject",
    

    MovieRecommendationDesc : "Developed a movie recommendation system using MongoDB, implementing CRUD operations and RESTful APIs to manage movie data, including titles, genres, and directors. Utilized aggregation pipelines for efficient querying and search functionality based on user preferences, leading to a more personalized movie recommendation experience.",
    MovieRecommendationGithub : "https://github.com/RashmithaEttadi/MovieRecommendationSystem",
   

    AICodeEditorDesc:"AI-Code Editor is an intelligent code editor that integrates AI-powered chat assistance to provide real-time debugging, explanations, and guidance on existing Judge0 IDE. It enhances productivity by offering inline code insights, bug detection with fix suggestions, and seamless AI-driven support directly within the editor.",
    AICodeEditorYouTube:"https://youtu.be/xvz38QiB0tk",
  
  }

  let showGithub = desc[projectName + 'Github'] ? "block" : "none";
  let showYouTube = desc[projectName + 'YouTube'] ? "block" : "none";
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{ display: showGithub }} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{ display: showYouTube }} href={desc[projectName + 'YouTube']} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><FaYoutube /> YouTube</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox