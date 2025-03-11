import React from 'react';
import ProjectBox from './ProjectBox';
import RLProjectImg from '../images/portfolio_opt.png';
import MovieRecommendation from '../images/MovieRecommendation.png';
import DataAnalysisProject from '../images/DataAnalysisProject.png';
import AICodeEditor from '../images/AI_Code_Editor.jpg';
const Projects = () => {
  return (
    <>
    <section id='ProjectsPage'>
      <h1 className='projectHeading'> <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RLProjectImg} projectName="PortfolioOptimization" />
        <ProjectBox projectPhoto={AICodeEditor} projectName="AICodeEditor" />
        <ProjectBox projectPhoto={DataAnalysisProject} projectName="DataAnalysisProject" />
        <ProjectBox projectPhoto={MovieRecommendation} projectName="MovieRecommendation" />
        
        
      </div>

    </section>
    </>
  )
}

export default Projects