import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import db from './firebase';
import { AuthContext } from './Auth';
import { Container } from 'react-bootstrap';
import { googleLogin } from './google-auth';
import logo from '../Asset/Images/logo.png';
import logo2 from '../Asset/Images/logo2.png';
import google from '../Asset/Images/icon/google.png';

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
        <img src={logo2} className='logo2' alt='logo' />
      </header>
      <form className='row' onSubmit={handleLogin}>
        <div className='col-md-12'>
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
          <button class='login' type='submit'>
            Iniciar sesión
          </button>
          {/* BOTON DE INGRESO CON GOOGLE*/}

          <button onClick={() => googleLogin()} class='register_google'>
            <span>Ingresa con Google</span>
            <img src={google} className='google-icon' alt='logo de google' />
          </button>
        </div>
        {/* BOTON DE REGISTRO*/}
        <h6>
          ¿No tienes cuenta?{' '}
          <button className='return_login' type='submit' to='/register'>
            <Link to='/register'>Registrarte</Link>
          </button>{' '}
        </h6>
      </form>
    </Container>
  );
};

export default withRouter(Login);
