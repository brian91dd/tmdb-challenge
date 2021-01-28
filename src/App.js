import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link,
} from "react-router-dom";
import './App.css';

import Home from './pages/home';
import Detail from './pages/detail'
import NotFound from './pages/not-found'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail">About</Link>
          </li>
          <li>
            <Link to="/this-does-not-exists">404</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route path="/" component={Home} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
