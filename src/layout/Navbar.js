import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ReactSVG from 'react-svg';
import './styles.css';
import bicuoLogo from '../assets/images/logos/bicuo.svg';

class CustomNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect fixedTop className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <ReactSVG path={bicuoLogo} style={{ width: 195, height: 'auto' }} />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/">
              Inicio
            </NavItem>
            <NavItem eventKey={2} href="/actividades">
              Actividades
            </NavItem>
            <NavItem eventKey={1} href="/inscripcion">
              ¿Ya tienes una cuenta?
            </NavItem>
            <NavItem eventKey={2} href="/inscripcion">
              ¡REGISTRATE!
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
