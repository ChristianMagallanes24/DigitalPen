// Header.jsx
import React from 'react';
import NavBar from "../Nav/Nav";
import robot from "../../assets/xdd.gif";
import { useLanguage } from '../LanguageContext';

function Header() {
  const { obtenerTraduccion } = useLanguage();

  return (
    <>
      <NavBar />
      <div id="inicio" className="header">
        <div className="hi">
          <img
            src={robot}
            alt="DigitalPen Logo"
            className="robot"
          />
        </div>
        <div className="header-informacion">
          <h1 className="titulo">{obtenerTraduccion('Somos una agencia digital enfocada en potenciar tu negocio')}</h1>
          <p className="informacion">{obtenerTraduccion('Nuestro objetivo principal es ayudarte a adaptarte a la era digital, lo cual implica mejorar y potenciar tu presencia online para alcanzar tus objetivos')}</p>
          <a className="btn-header" href="https://calendly.com/digitalpen/digitalpen-reserva">{obtenerTraduccion('Agendar una asesoría gratuita')}</a>
        </div>
      </div>
    </>
  );
}

export default Header;
