import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import db from './firebase';
import './Register.css';
import { Container } from 'react-bootstrap';
import logo from '../Asset/Images/logo.png';
import logo2 from '../Asset/Images/logo2.png';

const Register = ({ history }) => {
  const handleRegister = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await db
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <Container>
      <header className='app_header'>
        <img src={logo} className='logo' alt='logo' />
        <img src={logo2} className='logo2' alt='logo' />
      </header>

      <form className='row' onSubmit={handleRegister}>
        <div className='col-md-12'>
          <label className='label'>
            Nombre
            <input
              className='form-control'
              type='tex'
              name='name'
              placeholder='Escribe tu pseudónimo'
            />
          </label>
          <label className='label'>
            Email
            <input
              className='form-control'
              name='email'
              type='email'
              placeholder='Email'
            />
          </label>
          <label className='label'>
            Password
            <input
              className='form-control'
              name='password'
              type='password'
              placeholder='Password'
            />
          </label>

          {/* BOTON DE REGISTRO*/}
          <button class='login' type='submit'>
            Registrarse
          </button>

          {/* BOTON DE INGRESO CON GOOGLE*/}
          <button class='register_google' to='/' type='submit'>
            <Link to='/'>Registrarse con Google</Link>
          </button>

          {/* BOTON DE VOLVER A LOGIN*/}
          <h6>
            Si ya estas registrado ingresa{' '}
            <button class='return_login' type='submit'>
              <Link to='/'>aquí</Link>
            </button>
          </h6>
        </div>
      </form>
    </Container>
  );
};

export default withRouter(Register);
