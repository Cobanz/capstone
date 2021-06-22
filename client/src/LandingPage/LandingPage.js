import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import "./LandingPage.css"
import {useHistory} from 'react-router-dom'

class LandingPage extends React.Component {

    state = {
        name: ""
    }


    // onSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.requestUsername(this.state.name)
    //     // need to write in the request username 

    // }


    onNewUsername = e => {
        this.setState({
            name: e.target.value
        })
    }

    history = useHistory();

    loggedIn = () => { 
        if (this.props.loggedIn) {
            <Link to='/game'></Link>
        }
 }

 handleSubmit(event) {
    event.preventDefault();
  
    try {
    Auth.signIn(this.state.name);
      userHasAuthenticated(true);
      history.push("/game");
    } catch (e) {
      alert(e.message);
    }
    this.props.requestUsername(this.state.name)
  }

    render() {


        return(
            <div className="Username">this will be the log in form
            <form onSubmit={this.handleSubmit}>
            <MDBInput label='Username' id='typeText' type='text' onChange={this.onNewUsername} value={this.state.name} />
            {/* <Link to='/game'> */}
            <input type="submit" name="submit" value="Log-in" className="submit" onClick={this.loggedIn()}/>
            {/* </Link> */}
            </form>
            </div>
        )
    }
}

export default LandingPage