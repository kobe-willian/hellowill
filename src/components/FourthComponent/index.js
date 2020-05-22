import React from 'react';

import logoStilo from '../../assets/portifolio-logo-stilo.png';
import logoCegil from '../../assets/portifolio-logo-cegil.png';
import logoKidelicia from '../../assets/portifolio-logo-kidelicia.png';
import logoGraca from '../../assets/portifolio-logo-graca.png';
import logoDonati from '../../assets/portifolio-logo-donati.png';
import logoMoria from '../../assets/portifolio-logo-moria.png';
import logoAline from '../../assets/portifolio-logo-aline.png';
import logoValeVerde from '../../assets/portifolio-logo-vale-verde.png';

import './styles.css';

export default () => {
  return (
    <div className="component fourth-component">
      <div className="component__content container">
        <div className="component__title animate__animated animate__fadeIn">
          <h2>
            Portifólio
          </h2>
        </div>
        <a href="https://stilobw.com.br/" target="_blank" className="component__project project-a animate__animated animate__fadeIn">
          <img src={logoStilo} className="image" alt="Cliente - Stilo Confecção"/>
          <div className="project-shadow"></div>
        </a>
        <a href="https://cegil.com.br/" target="_blank" className="component__project project-b animate__animated animate__fadeIn">
          <img src={logoCegil} className="image" alt="Cliente - Cegil Construção e Acabamento"/>
          <div className="project-shadow"></div>
        </a>
        <a href="https://kideliciaresende.com.br/" target="_blank" className="component__project project-c animate__animated animate__fadeIn">
          <img src={logoKidelicia} className="image" alt="Cliente - Kidelicia Pizzaria"/>
          <div className="project-shadow"></div>
        </a>
        <a href="https://gracaturismo.com.br/" target="_blank" className="component__project project-d animate__animated animate__fadeIn">
          <img src={logoGraca} className="image" alt="Cliente - Graça Turismo"/>
          <div className="project-shadow"></div>
        </a>
        <a href="https://hoteldonati.com.br/" target="_blank" className="component__project project-e animate__animated animate__fadeIn">
          <img src={logoDonati} className="image" alt="Cliente - Hotel Donati"/>
          <div className="project-shadow"></div>
        </a>
        <a href="https://pousadarecantodemoria.com/" target="_blank" className="component__project project-f animate__animated animate__fadeIn">
          <img src={logoMoria} className="image" alt="Cliente - Pousada Recanto de Moria"/>
          <div className="project-shadow"></div>
        </a>
        <a href="https://aline.psc.br/" target="_blank" className="component__project project-g animate__animated animate__fadeIn">
          <img src={logoAline} className="image" alt="Cliente - Doutora Aline Perretto"/>
          <div className="project-shadow"></div>
        </a>
        <a href="https://valeverdepenedo.com.br/" target="_blank" className="component__project project-h animate__animated animate__fadeIn">
          <img src={logoValeVerde} className="image" alt="Cliente - Vale Verde Penedo"/>
          <div className="project-shadow"></div>
        </a>
      </div>
    </div>
  );
};