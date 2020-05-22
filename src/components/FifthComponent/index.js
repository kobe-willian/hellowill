import React from 'react';

import iconEmail from '../../assets/icon-mail.png';
import iconLinkedin from '../../assets/icon-linkedin.png';
import iconGithub from '../../assets/icon-github.png';

import './styles.css';

export default () => {
  return (
    <div className="component fifth-component">
      <div className="component__content">
        <h2 className="component__title animate__animated animate__fadeInUp animate__delay-1s">Entre em contato comigo!</h2>
        <div className="component__social animate__animated animate__fadeInUp animate__delay-1s">
          <div className="social social-email">
            <img src={iconEmail} className="icon" alt="Willian Anderson - E-mail"/>
            <span>williandealmeida@live.com</span>
          </div>
          <div className="social social-linkedin">
            <a href="https://www.linkedin.com/in/willian-anderson-de-almeida-957ba4164/" target="_blank">
              <img src={iconLinkedin} className="icon" alt="Willian Anderson - Linkedin"/>
            </a>
          </div>
          <div className="social social-github">
            <a href="https://github.com/kobe-willian" target="_blank">
              <img src={iconGithub} className="icon" alt="Willian Anderson - Github"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};