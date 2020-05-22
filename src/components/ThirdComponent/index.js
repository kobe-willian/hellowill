import React from 'react';

import logoPHP from '../../assets/logo-php.png';
import logoReact from '../../assets/logo-react.png';
import logoNode from '../../assets/logo-node.png';
import logoLaravel from '../../assets/logo-laravel.png';

import './styles.css';

export default () => {
  return (
    <div className="component third-component">
      <div className="component__content container">
        <div>
          <h2 className="component__title animate__animated animate__fadeInUp animate__delay-1s">
            Hoje sou desenvolvedor
          </h2>
          <div className="component__text animate__animated animate__fadeInUp animate__delay-1s">
            <p>
              Atuo no mercado já faz 4 anos, a primeira linguagem que aprendi foi C e depois PHP, tive a oportunidade de estagiar em uma agência de Desenvolvimento de Software onde trabalhava todos os dias com PHP.<br/>Pouco antes de me formar na faculdade recebi uma oferta de outra agência onde pude excercer a função de Gestor da equipe de Desenvolvimento Web.<br/>Hoje eu estou na Kobe aprendendo novidades a cada dia, atualmente estou estudando ReactJs junto a NodeJs.<br/>Tenho muito interesse em aprender a desenvolver app mobile e no momento estou dando uma chance a aprender Flutter.
            </p>
          </div>
        </div>
      </div>
      <div className="mouse-animate animate__animated animate__fadeIn animate__delay-1s no-mobile">
        <div className="mouse-animate__content">
          <div className="mouse-animate__scroll"></div>
        </div>
      </div>
      <img src={logoPHP} className="logo logo-php bg-contain animate__animated animate__fadeIn animate__delay-1s" alt="Logo PHP"/>
      <img src={logoReact} className="logo logo-react bg-contain animate__animated animate__fadeIn animate__delay-1s" alt="Logo React"/>
      <img src={logoNode} className="logo logo-node bg-contain animate__animated animate__fadeIn animate__delay-1s" alt="Logo React"/>
      <img src={logoLaravel} className="logo logo-laravel bg-contain animate__animated animate__fadeIn animate__delay-1s" alt="Logo React"/>
    </div>
  );
};