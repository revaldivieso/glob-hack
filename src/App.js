import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Welcome } from './Components/Welcome';
import { Login } from './Components/Login';

function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route exact path="/welcome" component={Welcome} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
