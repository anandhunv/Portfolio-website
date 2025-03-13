import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

import About from './component/About'
import Footer from './component/Footer'
import CertificateSection from './component/CertificateSection'
import ContactMe from './component/Contact'
import EducationExperience from './component/Education'
import SkillsSection from './component/SkillsSection'
import SkillsLogo from './component/CompanyLogo'
import WhatIDo from './component/FeaturesSection'
import ProjectSection from './component/ProjectSection'

function App() {

  return (
<>
  <Navbar/>  
  <Hero/>                  
  <About/>                 
 <WhatIDo/>   
 <SkillsLogo/>            
            
  <SkillsSection/>        
  <EducationExperience/>    
  <CertificateSection/>    
    <ProjectSection/>       
 <ContactMe/>             
  <Footer/>               
</>


  )
}

export default App
