import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "../node_modules/react-router-dom";


import './App.css';
import ScoresContainer from "./Score/ScoresContainer";
import LandingPage from "./LandingPage/LandingPage";
import GameContainer from "./Game/GameContainer";
import CreateLogIn from "./CreateLogIn/CreateLogIn";

class App extends React.Component{

  state = {
    name: "",
    score: "",
    role: "",
    loggedIn: false
  }

  requestUsername = (currentUser) => {
    let postOptions = {
      method: 'POST',
      headers:{
        "Content-Type": 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(currentUser)
    }
    fetch("/login", postOptions)
    // fetch("/login")
    .then(res =>res.json())
    .then(addUser => addUser.name? this.setState({name: addUser.name, role:addUser.role, loggedIn: true}):null)

  }

  createUsername = (newPlayer) => {
    let postOptions  = {
      method: 'POST',
      headers:{
        "Content-Type": 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(newPlayer)
    }
    fetch('/newuser', postOptions)
    .then(res => res.json())
    .then(addPlayer => this.setState({name: addPlayer.name, role:addPlayer.role, loggedIn: true}))

  }


  render(){
  return (
    <div className="App">
      

     <Router>
      <div className="App">
        <nav>
          <ul className="navBar">
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
              <Link to="/newUser">Create New Player</Link>
            </li>
         
          </ul>
        </nav>
        <Switch>
          <Route path="/game">
            <GameContainer loggedIn={this.state.loggedIn}/>
          </Route>
          <Route path="/scores">
            <ScoresContainer />
          </Route>
          <Route path="/newUser">
            <CreateLogIn createUsername={this.createUsername}/>
          </Route>
          <Route exact path="/">
            <LandingPage loggedIn={this.state.loggedIn} requestUsername={this.requestUsername}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
}
export default App;
