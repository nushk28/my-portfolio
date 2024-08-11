// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ExperienceCard from './components/ExperienceCard';
import ProjectsCard from './components/ProjectsCard';
import Contact from './components/Contact';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  const experiences = [
    {
      image: 'intern2.jpg',
      title: 'Social Intern',
      company: 'Srijan Social Internship',
      duration: 'June 2022 - July 2022',
      description: 'Interned at Subhash Children Society, an organization dedicated to addressing the challenges and crimes faced by children.',
    },
    {
      image: 'intern1.png',
      title: 'Web Development Intern',
      company: 'OCTANET',
      duration: 'August 2023 - August 2023',
      description: 'Completed three front-end development tasks involving HTML, CSS, and JavaScript. Utilized GitHub for version control, gaining practical experience and understanding its functionalities.',
      link: 'https://github.com/nushk28/OCTANET_AUGUST', 
    },
    
    {
      image: 'intern3.jpg',
      title: 'Technical Intern',
      company: 'IBM Phemesoft',
      duration: 'June 2024 - July 2024',
      description: 'Developed an IoT and cloud-based smart irrigation system using AWS, Node.js, and React.',
      link: 'https://github.com/unnati14ag/smart_irrigate/tree/main',
    },
  ];

  const projects = [
    {
      image: 'project1.png',
      title: 'HiringHive Job Portal',
      description: 'Portal simplifies job search, and management processes for both job seekers and recruiters.',
      tools: 'Java Springboot, React.js, MongoDB',
      link: 'https://github.com/Sanky2104/HiringHiveJobPortal/tree/master', 
    },
    {
      image: 'project2.png',
      title: 'BlogOptimize WebApp',
      description: 'Enhanced performance through cloud performance tuning.',
      tools: 'MongoDB, Express, React, Node',
      link: 'https://github.com/nushk28/CPT_PROJECTS', 
    },
    {
      image: 'project3.png',
      title: 'Dracarys',
      description: 'Get mesmerized by the world of dragons and their riders.',
      tools: 'HTML, CSS, JavaScript',
      link: 'https://github.com/nushk28/dracarys-adv', 
    },
  ];

  return (
    <Router>
      <Navbar />
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiences" element={
              <div className="card-container">
                {experiences.map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    image={exp.image}
                    title={exp.title}
                    company={exp.company}
                    duration={exp.duration}
                    description={exp.description}
                    link={exp.link}
                  />
                ))}
              </div>
            } />
            <Route path="/projects" element={
              <div className="card-container">
                {projects.map((proj, index) => (
                  <ProjectsCard
                    key={index}
                    image={proj.image}
                    title={proj.title}
                    description={proj.description}
                    tools={proj.tools}
                    link={proj.link}
                  />
                ))}
              </div>
            } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;