import React from 'react';
import { Navbar } from 'react-bootstrap';


export const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand href="#home">Period</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
            </Navbar>
    )
  }