import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import db from './firebase';
import { AuthContext } from './Auth';

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
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          Password
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Iniciar sesión</button>

        {/* BOTON DE REGISTRO*/}
        <h6>
          Si no estas registrado ingresa{' '}
          <button className='register' type='submit' to='/register'>
            <Link to='/register'>aquí</Link>
          </button>{' '}
        </h6>

        {/* BOTON DE INGRESO CON GOOGLE*/}

        <button class='register_google' to='/' type='submit'>
          <Link to='/'>Ingresa con Google</Link>
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
