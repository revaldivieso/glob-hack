import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Container } from 'react-bootstrap';

const SectionInfo = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <section>
        <button>Ayuda</button>
        <button>Información</button>
      </section>
      <section>
        <p>
          A veces nos encontramos en posiciones que nos hacen sentir incómodas y
          pueden llevarnos a situaciones de riesgo.
        </p>
        <p>
          Cualquiera sea el caso, no dudes en pedir ayuda. Acá te entregamos
          distintas opciones para que sepas que no estás sola.
        </p>
      </section>
      <section>
        <button>ASESORÍA LEGAL</button>
        <button>CHAT DE APOYO</button>
        <button>BOTÓN DE PÁNICO</button>
      </section>

      {/* BOTON DE VOLVER A HOME*/}
      <button class='return_login' type='submit'>
        <Link to='/'>Regresar al Home</Link>
      </button>
    </Container>
  );
};
export default SectionInfo;
