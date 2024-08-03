// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';  // Adjusted the import path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faHackerrank } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-list">
        <a href="mailto:nushk.28@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> nushk.28@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/anushka-srivastava-92a0ba242/">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/nushk28">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://leetcode.com/u/Anushka_Srivastava_28/">
          <FontAwesomeIcon icon={faLinkedin} /> LeetCode
        </a>
        <a href="https://www.hackerrank.com/profile/h500096291">
          <FontAwesomeIcon icon={faHackerrank} /> HackerRank
        </a>
        <a href="https://www.instagram.com/nushk_28">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="https://www.naukri.com/code360/profile/8ccec838-31d6-4214-b21a-7c79664adc5d">
          <FontAwesomeIcon icon={faInstagram} /> Coding Ninjas
        </a>
      </div>
    </div>
  );
};

export default Contact;
