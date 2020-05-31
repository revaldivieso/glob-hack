import React from 'react';
import { Navigation } from './Navigation';
import { Container } from 'react-bootstrap';
import './MoreInfo.css';
import Panic from '../Asset/Images/buttons/panic.png';
import Legal from '../Asset/Images/buttons/legal.png';
import Chat from '../Asset/Images/buttons/chat.png';

const MoreInfo = () => {
    return (
        <Container>
      <header>
        <Navigation />
      </header>
      <div className="section-btns">
        <button>AYUDA</button>
        <button>INFORMACIÓN</button>
      </div>
      <div className="info">
        <p>A veces nos encontramos en posiciones que nos hacen sentir incómodas y pueden llevarnos a situaciones de riesgo.</p><br/>
        <p>Cualquiera sea el caso, no dudes en pedir ayuda. Acá te entregamos distintas opciones para sepas que no estás sola.</p>
      </div>
      <div className="help-btns">
        <img src={Panic} alt="boton de panico"/>
        <img src={Legal} alt="temas legales"/>
        <img src={Chat} alt="hablar con alguien"/>

      </div>
      </Container>
    )
}

export default MoreInfo;