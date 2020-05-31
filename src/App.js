import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Sintomas from './Components/Sintomas';
import { AuthProvider } from './Components/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route path='/sintomas' component={Sintomas} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
