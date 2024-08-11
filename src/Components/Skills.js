import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaPython, FaDatabase, FaJava} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";
import {SiPostman,SiSpringboot,SiOracle} from "react-icons/si";


const Skills = ({skill}) => {
    const icon = {
        'Java':<FaJava color="#007396" />,
        'Python':<FaPython color="#306998"/>,
        'MySQL': <FaDatabase color="#4479A1" />,
        'SpringBoot':<SiSpringboot color="#6DB33F"/>,
        'Oracle':<SiOracle color="#F80000"/>,
        'C++': <CgCPlusPlus color="#00599C"/>,
        'Postman': <SiPostman color="#FF6C37"/>,
        'React': <FaReact color="#61DAFB"/>,
        'Javascript': <DiJavascript1 color="#F7DF1E" />,
        'Git' : <FaGitAlt color="#F05032"/>,
    }
    
  return (
    <>
    <div title={skill} className='SkillBox'>
      {icon[skill]} 
      <div className='skillContent'>
      {skill}
    </div>
    </div>
   
    </>
  )

}

export default Skills
