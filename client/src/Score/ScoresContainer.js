import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import { useState } from 'react';



class ScoresContainer extends React.Component {
    state = {
        scores: [],
        name: '',
        score: '',
        id: '',
        role: ''
    }


    componentDidMount() {
        fetch('/me')
            .then(res => res.json())
            .then(data => this.setState({
                id: data.id,
                role: data.role
            }))




    }

    getScores = () => {
        const userId = this.state.id
        if (this.state.scores.length < 1) {
            if (this.state.role === 'admin') {
                console.log('im admin')
                fetch(`/score`)
                    .then(res => res.json())
                    .then(data => this.setState({
                        scores: data
                    }))

            } else {
                console.log('im Not admin')
                fetch(`/score/${userId}`)
                    .then(res => res.json())
                    .then(data => this.setState({
                        scores: data
                    }))
            }
        }
    }



    render() {
        let row = 1

        return (
            <div>
                {/*put ()  after getScore */}
                {this.getScores()}
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Username</th>
                            <th scope='col'>Score</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>


                        {this.state.scores.map(score => {
                            return (
                                <tr>
                                    <th>{row++}</th>
                                    <td>{score.user.name}</td>
                                    <td>{score.score}</td>
                                    {this.state.role === 'admin' ? <td>delete</td> : null}
                                </tr>
                            )
                        })}

                    </MDBTableBody>
                </MDBTable>
            </div>
        )
    }
}

export default ScoresContainer
