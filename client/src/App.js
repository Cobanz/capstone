import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "../node_modules/react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

     <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/scores">Scores</Link>
            </li>
            <li>
            {/* users will need to set conditional where only a person logged in as admin can see it */}
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

      </div>
    </Router>
    </div>
  );
}

export default App;
