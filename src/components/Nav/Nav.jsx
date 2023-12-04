// NavBar.jsx
import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png";
import { useLanguage } from '../LanguageContext';

function NavBar() {
    const { cambiarIdioma, idioma, obtenerTraduccion } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            // Puedes dejar vacío este bloque de código si no necesitas ninguna lógica de scroll específica.
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" className="nav fixed-top">
            <Container>
                <ScrollLink to="inicio" spy={true} smooth={true} duration={50}>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            alt="DigitalPen Logo"
                            className="logo-img"
                        />
                    </Navbar.Brand>
                </ScrollLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <ScrollLink to="inicio" spy={true} smooth={true} duration={50}>
                            <Nav.Link>{obtenerTraduccion('Inicio')}</Nav.Link>
                        </ScrollLink>
                        <ScrollLink to="servicios" spy={true} smooth={true} duration={50}>
                            <Nav.Link>{obtenerTraduccion('Servicios')}</Nav.Link>
                        </ScrollLink>
                        <ScrollLink to="precios" spy={true} smooth={true} duration={50}>
                            <Nav.Link>{obtenerTraduccion('Precios')}</Nav.Link>
                        </ScrollLink>
                        <ScrollLink to="contacto" spy={true} smooth={true} duration={150}>
                            <Nav.Link>{obtenerTraduccion('Contacto')}</Nav.Link>
                        </ScrollLink>
                        <button className="nav-link" onClick={cambiarIdioma}>
                            {idioma === 'es' ? 'English' : 'Español'}
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
