import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './App.scss';

import Home from './pages/home';
import Detail from './pages/detail';
import NotFound from './pages/not-found';

function App() {
  return (
    <Router>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/" component={Home} exact />
        <Route path="*" component={NotFound} />
      </Switch>
      <footer className="footer">
        <p>By de Diego, Brian Adrián</p>
      </footer>
    </Router>
  );
}

export default App;
