import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Socials=()=>{
    return(
        <div className="mediaIcons">
               <a href="https://github.com/RashmithaEttadi" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
               <a href="https://www.linkedin.com/in/rashmithaettadi/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
               <a href='mailTo:rashmitha09ettadi@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail/></a>
               </div>
    )
}
export default Socials