import React from 'react';
import db from './firebase';

const Home = () => {
  return (
    <>
      <h1>Home></h1>
      <button onClick={() => app.auth().signOut()}>Cerrar sesión</button>
    </>
  );
};
export default Home;
