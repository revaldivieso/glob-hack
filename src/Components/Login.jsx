import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import db from './firebase';
import { AuthContext } from './Auth';
import { Container } from 'react-bootstrap';
import logo from '../Asset/Images/logo.png';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await db.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }
  return (
    <Container>
      <header className='app_header'>
        <img src={logo} className='logo' alt='logo' />
      </header>
      <h5>Iniciar Sesión</h5>
      <form className='row' onSubmit={handleLogin}>
        <div className='col-md-12'>
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
          <button class='login' type='submit'>
            Iniciar sesión
          </button>
          {/* BOTON DE INGRESO CON GOOGLE*/}

          <button class='register_google' to='/' type='submit'>
            <Link to='/'>Ingresa con Google</Link>
          </button>
        </div>
        {/* BOTON DE REGISTRO*/}
        <h6>
          ¿No tienes cuenta?{' '}
          <button className='register' type='submit' to='/register'>
            <Link to='/register'>Registrarte</Link>
          </button>{' '}
        </h6>
      </form>
    </Container>
  );
};

export default withRouter(Login);
