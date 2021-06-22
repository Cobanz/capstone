import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "../node_modules/react-router-dom";


import './App.css';
import ScoresContainer from "./Containers/ScoresContainer";
import Users from "./Componets/Users";
import LandingPage from "./Containers/LandingPage";
import GameContainer from "./Containers/GameContainer";

class App extends React.Component{

  state = {
    name: "",
    score: "",
    role: ""
  }


  render(){
  return (
    <div className="App">
      

     <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
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
        <Switch>
          <Route exact path="/scores">
            <ScoresContainer />
          </Route>
          <Route exact path="/game">
            <GameContainer/>
          </Route>
          <Route exact path="/users">
            <Users/>
          </Route>
          <Route exact path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
}
export default App;
