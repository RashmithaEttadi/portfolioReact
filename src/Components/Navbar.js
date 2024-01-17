import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";
import {FaEnvelope} from "react-icons/fa";

const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo'>RE</h1>

        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={hideMenu}><Link to="/" onClick={()=>{document.getElementById('Home').scrollIntoView({behavior: 'smooth'})}}><AiOutlineHome/> Home</Link></li>
            {/* <a href='#About' onClick={hideMenu}><BsPerson/> About</a> */}
            <li onClick={hideMenu}><Link to="/About" onClick={()=>{document.getElementById('About').scrollIntoView({behavior: 'smooth'})}}><BsPerson/> About</Link></li>
            <li onClick={hideMenu}><Link to="/Project" onClick={()=>{document.getElementById('ProjectsPage').scrollIntoView({behavior: 'smooth'})}}><BsCodeSlash/> Projects</Link></li>
            <li onClick={hideMenu}><Link to="/Resume" onClick={()=>{document.getElementById('ResumePage').scrollIntoView({behavior: 'smooth'})}}><CgFileDocument/> Resume</Link></li>
            {/* <li onClick={hideMenu}><Link to="/Contact"> <button className="desktopMenuBtn"> <FaEnvelope /> Contact Me </button></Link></li> */}
            <li onClick={hideMenu}>
            <button className="desktopMenuBtn" onClick={()=>{document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})}}> <FaEnvelope /> Contact Me </button></li>
        </ul>
        
    </nav>
  )
}

export default Nav