import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Anushka Srivastava, a Computer Science student specializing in CCVT(H) at UPES, Dehradun. Explore my portfolio to learn more about my skills, projects, and experiences.
      </p>
      <div className="home-links">
        <Link to="/about" className="btn btn-primary">About</Link>
        <Link to="/experiences" className="btn btn-primary">Experiences</Link>
        <Link to="/projects" className="btn btn-primary">Projects</Link>
        <Link to="/contact" className="btn btn-primary">Contact</Link>
      </div>
    </div>
  );
};

export default Home;
