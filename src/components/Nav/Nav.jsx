import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png";

function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`nav ${scrolling ? 'scrolled fixed-top' : ''}`}>
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
              <Nav.Link>Inicio</Nav.Link>
            </ScrollLink>
            <ScrollLink to="servicios" spy={true} smooth={true} duration={50}>
              <Nav.Link>Servicios</Nav.Link>
            </ScrollLink>
            <ScrollLink to="contacto" spy={true} smooth={true} duration={150}>
              <Nav.Link>Contacto</Nav.Link>
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
