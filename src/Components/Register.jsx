import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import db from './firebase';
import './Register.css';

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
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          Password
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Registrarse</button>
        {/* BOTON DE VOLVER A LOGIN*/}

        <h6>
          Si ya estas registrado ingresa{' '}
          <button class='return_login' type='submit'>
            <Link to='/'>aquí</Link>
          </button>
        </h6>
      </form>
    </div>
  );
};

export default withRouter(Register);
