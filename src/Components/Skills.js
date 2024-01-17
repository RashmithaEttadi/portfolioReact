import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaPython, FaDatabase, FaJava} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";
import {SiPostman,SiSpringboot,SiOracle} from "react-icons/si";


const Skills = ({skill}) => {
    const icon = {
        'Java':<FaJava/>,
        'Python':<FaPython/>,
        'MySQL': <FaDatabase/>,
        'SpringBoot':<SiSpringboot />,
        'Oracle':<SiOracle/>,
        'C++': <CgCPlusPlus/>,
        'Postman': <SiPostman/>,
        'React': <FaReact/>,
        'Javascript': <DiJavascript1/>,
        'Git' : <FaGitAlt/>,
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
