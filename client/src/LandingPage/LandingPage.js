import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import "./LandingPage.css"

class LandingPage extends React.Component {

    state = {
        name: ""
    }


    onSubmit = (e) => {
        e.preventDefault()
        this.props.requestUsername(this.state.name)
        // need to write in the request username 

    }


    onNewUsername = e => {
        this.setState({
            name: e.target.value
        })
    }


    render() {



        return(
            <div className="Username">this will be the log in form
            <form onSubmit={this.onSubmit}>
            <MDBInput label='Username' id='typeText' type='text' onChange={this.onNewUsername} value={this.state.name} />
            <input type="submit" name="submit" value="Log-in" className="submit" />
            </form>
            </div>
        )
    }
}

export default LandingPage