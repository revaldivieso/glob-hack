import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import db from './firebase';
import './Register.css';
import { googleLogin } from './google-auth';
import { Container } from 'react-bootstrap';
import logo from '../Asset/Images/logo.png';
import logo2 from '../Asset/Images/logo2.png';
import google from '../Asset/Images/icon/google.png';

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
            <input
              className='form-control'
              type='tex'
              name='name'
              placeholder='Escribe tu pseudónimo'
            />
          </label>
          <label className='label'>
            <input
              className='form-control'
              name='email'
              type='email'
              placeholder='Correo electrónico'
            />
          </label>
          <label className='label'>
            <input
              className='form-control'
              name='password'
              type='password'
              placeholder='Contraseña'
            />
          </label>

          {/* BOTON DE REGISTRO*/}
          <button class='login' type='submit'>
            Registrarse
          </button>

          {/* BOTON DE INGRESO CON GOOGLE*/}
          <button onClick={() => googleLogin()} class='register_google'>
            <span>Registrarse con Google</span>
            <img src={google} className='google-icon' alt='logo de google' />
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
