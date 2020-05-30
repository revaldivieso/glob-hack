import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { AuthProvider } from './Components/Auth';
import { Welcome } from './Components/Welcome';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/welcome" component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
