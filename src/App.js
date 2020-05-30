import React from 'react';
import './App.css';
import { BrowserRoute as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { AuthProvider } from './Components/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
