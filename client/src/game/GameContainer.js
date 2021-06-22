import React from 'react'
import {gameStart} from './Game'



class GameContainer extends React.Component{



    render() {
       return <div>{this.props.loggedIn? (gameStart()): "Please Log In To Play"}</div>
    }
}

export default GameContainer 