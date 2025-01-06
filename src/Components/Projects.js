import React from 'react';
import ProjectBox from './ProjectBox';
import RLProjectImg from '../images/portfolio_opt.png';
import MovieRecommendation from '../images/MovieRecommendation.png';
import FaceDetection from '../images/facedetection.png';
import DataAnalysisProject from '../images/DataAnalysisProject.png';

const Projects = () => {
  return (
    <>
    <section id='ProjectsPage'>
      <h1 className='projectHeading'> <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RLProjectImg} projectName="PortfolioOptimization" />
        <ProjectBox projectPhoto={DataAnalysisProject} projectName="DataAnalysisProject" />
        <ProjectBox projectPhoto={MovieRecommendation} projectName="MovieRecommendation" />
        <ProjectBox projectPhoto={FaceDetection} projectName="FaceDetection" />
        
      </div>

    </section>
    </>
  )
}

export default Projects