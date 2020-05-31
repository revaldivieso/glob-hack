import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Container } from 'react-bootstrap';
import './Sintomas.css';
import ok from '../Asset/Images/relaciones/ok.png';
import consent from '../Asset/Images/relaciones/consent.png';
import noconsent from '../Asset/Images/relaciones/noconsent.png';
import love from '../Asset/Images/relaciones/love.png';
import calmada from '../Asset/Images/animo/calmada.png';
import nosalir from '../Asset/Images/animo/nosalir.png';
import irritada from '../Asset/Images/animo/irritada.png';
import callar from '../Asset/Images/animo/callar.png';
import bien from '../Asset/Images/sintomas/bien.png';
import colicos from '../Asset/Images/sintomas/colicos.png';
import golpe from '../Asset/Images/sintomas/golpe.png';
import herida from '../Asset/Images/sintomas/herida.png';
import Group from './Group';

const Sintomas = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <Group
        name='Relaciones y deseo sexual'
        items={[
          {
            name: 'Sexo consensual con protección',
            image: ok,
            classItem: 'ok',
          },
          {
            name: 'Sexo consensual sin protección',
            classItem: 'consent',
            image: consent,
          },
          {
            name: 'Sexo no consensual',
            classItem: 'noconsent',
            image: noconsent,
          },
          {
            name: 'Alto deseo sexual',
            image: love,
            classItem: 'love',
          },
        ]}
      />
      <Group
        name='Estado de ánimo'
        items={[
          { name: 'Calmada', image: calmada, classItem: 'calmada' },
          { name: 'Irritada', classItem: 'irritada', image: irritada },
          {
            name: 'Mi pareja no me deja salir',
            classItem: 'nosalir',
            image: nosalir,
          },
          {
            name: 'Mi pareja no me deja hablar con nadie',
            image: callar,
            classItem: 'callar',
          },
        ]}
      />

      <Group
        name='Síntomas'
        items={[
          { name: 'Estoy Bien', image: bien, classItem: 'bien' },
          { name: 'Cólicos', classItem: 'colicos', image: colicos },
          { name: 'Hematomas por golpes', classItem: 'golpe', image: golpe },
          { name: 'Heridas por agreseión', image: herida, classItem: 'herida' },
        ]}
      />

      {/* BOTON DE VOLVER A HOME*/}
      <button class='return_login' type='submit'>
        <Link to='/'>Regresar al Home</Link>
      </button>
    </Container>
  );
};
export default Sintomas;
