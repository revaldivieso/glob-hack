import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Container } from 'react-bootstrap';

const Sintomas = () => {
  return (
    <Container fluid className='content'>
      <header>
        <Navigation />
      </header>

      {/* BOTON DE VOLVER A HOME*/}
      <button class='return_login' type='submit'>
        <Link to='/'>Regresar al Home</Link>
      </button>
    </Container>
  );
};
export default Sintomas;
