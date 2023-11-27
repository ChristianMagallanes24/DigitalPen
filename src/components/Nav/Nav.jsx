import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav fixed-top">
      <Container>
      <ScrollLink to="inicio" spy={true} smooth={true} duration={50}>
          {/* Utiliza un enlace personalizado para tu logo */}
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
          <Nav className="me-auto">
            {/* Usa ScrollLink en lugar de Nav.Link */}
            <ScrollLink to="inicio" spy={true} smooth={true} duration={50}>
              <Nav.Link>Inicio</Nav.Link>
            </ScrollLink>

            <ScrollLink to="servicios" spy={true} smooth={true} duration={50}>
              <Nav.Link>Servicios</Nav.Link>
            </ScrollLink>
            <ScrollLink to="contacto" spy={true} smooth={true} duration={150}>
              <Nav.Link>Contacto</Nav.Link>
            </ScrollLink>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {/* Aquí puedes seguir usando Nav.Link o ScrollLink según sea necesario */}
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
