import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Rashmitha Ettadi</h4>
      <div className='footerLinks'>
        <a href="https://github.com/RashmithaEttadi" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/rashmithaettadi/" target='_blank' rel="noopener noreferrer" ><FaLinkedin/></a>
        <a href='mailTo:rashmitha09ettadi@gmail.com' target='_blank' rel="noopener noreferrer" ><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer