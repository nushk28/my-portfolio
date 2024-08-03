// src/components/ExperienceCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import '../../src/styles/ExperienceCard.css';

const ExperienceCard = ({ image, title, company, duration, description, link }) => {
  return (
    <Card className="experience-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/${image}`} alt={title} className="experience-image" />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
        <Card.Text>{duration}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
