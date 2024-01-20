// import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import { RingLoader } from 'react-spinners';
import Contact from "./Components/Contact";

function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <RingLoader
          color={'#216ad9'}
          loading={true}
          size={50}
          margin={2}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      
      <Nav/>
      <MoveToTop/>
      {/* <Home/>
      <About/>
      <Project/>
      <Resume/>  */}
     
      {/* <Routes>
      <Route path="/Resume" element={<Resume/>}/> 
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/About" element={<About/>}/> */}
        {/* <Route path="/Project" element={<Project/>}/> */}
        {/* <Route path="/Resume" element={<Resume/>}/> */}
        {/* <Route path="/Contact" element={ <Contact/>}/> */}
      {/* </Routes>  */}
      <Home/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
