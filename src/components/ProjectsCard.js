// src/components/Projects.js
import React from 'react';
import '../styles/ProjectsCard.css';
import { Card } from 'react-bootstrap';

const ProjectsCard = ({ image, title, description, tools, link }) => {
    return (
      <Card className="projects-card">
        <a href={link} target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/${image}`} alt={title} className="projects-image" />
        </a>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
          <Card.Text><strong>Tools & Technologies:</strong> {tools}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

export default ProjectsCard;
