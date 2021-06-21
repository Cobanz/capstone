import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "../node_modules/react-router-dom";

import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "../src/game/game.js";
    script.async = true;

    document.body.appendChild(script);
}
  render(){
  return (
    <div className="App">
      

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
}
export default App;
