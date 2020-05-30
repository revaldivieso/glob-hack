import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import db from './firebase';
import { AuthContext } from './Auth';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to='/login' />;
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => db.auth().signOut()}>Cerrar sesión</button>
    </>
  );
};
export default Home;
