import React from 'react';

import './styles.css';

export default () => {
  return (
    <div className="component first-component">
      <div className="component__content container">
        <h1 className="component__title animate__animated animate__fadeInRight">
          Meu nome é <br/>Willian Anderson
        </h1>
        <div className="component__text animate__animated animate__fadeInUp animate__delay-1s">
          <p>
            Sou de Resende-RJ, tenho 25 anos,<br/>formado em Sistemas de Informação.
          </p>
          <p>
            Trabalho como Desenvolvedor Web a 4 anos,<br/>tenho interesses em desenvolvimento mobile.
          </p>
        </div>
        <div className="component__image">
          <div className="image-shadow animate__animated animate__fadeInBottomLeft"></div>
          <div className="image bg-cover animate__animated animate__fadeInBottomLeft animate__delay-1s"></div>
        </div>
      </div>
      <div className="mouse-animate animate__animated animate__fadeIn animate__delay-2s no-mobile">
        <div className="mouse-animate__content">
          <div className="mouse-animate__scroll"></div>
        </div>
      </div>
    </div>
  );
};
