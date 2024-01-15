import React, { useState } from "react";
import miLogo from "../../assets/logo.png";
import { useLanguage } from '../LanguageContext';

import "./_Nav.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cambiarIdioma, idioma, obtenerTraduccion } = useLanguage();
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo-img" src={miLogo} alt="DigitalPen Logo" />
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <button className="btn-nav"><a href="#inicio">{obtenerTraduccion('Inicio')}</a></button>
        <button className="btn-nav"><a href="#servicios">{obtenerTraduccion('Servicios')}</a></button>
        <button className="btn-nav"><a href="#precios">{obtenerTraduccion('Precios')}</a></button>
        <button className="btn-nav"><a href="#contacto">{obtenerTraduccion('Contacto')}</a></button>
      <button
        className="btn-nav"
        onClick={() => cambiarIdioma(idioma === 'es' ? 'en' : 'es')}
      >
        {idioma === 'es' ? '👉🌎 Español👈' : '👉🌎 English👈'}
      </button>
    </div>
      

      <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>

      </div>
    </div>
  )
}
export default Navbar;