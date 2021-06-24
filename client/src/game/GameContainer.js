import React from 'react'
import {gameStart} from './Game'



class GameContainer extends React.Component{



    render() {
       return (
       <div> Kill skeletons to gain points try and get to the end and then check your score vs the others!
       <br/>
           {this.props.loggedIn? (gameStart()): "Please Log In To Play"}
       </div>
       )
    }
}



export default GameContainer 