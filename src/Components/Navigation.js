import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import db from './firebase';
import './Navigation.css';


export const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home">Period.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#login" onClick={() => db.auth().signOut()}>Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }