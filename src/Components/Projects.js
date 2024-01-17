import React from 'react';
import ProjectBox from './ProjectBox';
import RLProjectImg from '../images/portfolio_opt.png';
import EVoting from '../images/evoting.png';
import GestureRecognition from '../images/GestureRecognition.png';
import FaceDetection from '../images/facedetection.png';

const Projects = () => {
  return (
    <>
    <section id='ProjectsPage'>
      <h1 className='projectHeading'> <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RLProjectImg} projectName="PortfolioOptimization" />
        <ProjectBox projectPhoto={EVoting} projectName="EVoting" />
        <ProjectBox projectPhoto={GestureRecognition} projectName="GestureRecognition" />
        <ProjectBox projectPhoto={FaceDetection} projectName="FaceDetection" />
        
      </div>

    </section>
    </>
  )
}

export default Projects