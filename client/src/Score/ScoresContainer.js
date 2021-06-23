import React, {useState,useEffect} from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useParams } from 'react-router';
// import { useState } from 'react';



class ScoresContainer extends React.Component{
    state={
        scores:[],
        name:'',
        score:'',
        id:''
    }
  

   componentDidMount(){
    fetch('/me')
    .then(res=> res.json())
    .then(data => this.setState({
        id: data.id
    }))
   


     
   }



   getScore=()=>{
            const userId= this.state.id
             fetch(`/score/${userId}`)
                .then(res=> res.json())
                .then(data => this.setState({
                    scores: data
                }))
   }



//    renderData=()=>{

    // let row=1

    // {this.state.scores.map(score=>{
    //           return(
    //       <tr>
    //           <th>{row++}</th>
    //           <td>{score.user.name}</td>
    //           <td>{score.score}</td>
    //       </tr>
    //           )
    //       })}
        
    //   function ScoresContainer(){
    //       const [id,setId]=useState()
    //       const [score,setScore]=useState([])


    //         useEffect(()=>{
    //             console.log(id)
    //             fetch('/me')
    //             .then(res=> res.json())
    //             .then(data => setId(data.id)
    //         )})
                
            
    //             function getScore(){
    //                     console.log("score"+id)
    //                     fetch(`/score/${id}`)
    //                     .then(res=> res.json())
    //                     .then(data => setScore(data)) 

    //             }
                

     


    //         return(
    //             <div>
    //                 {score>0?(getScore()):console.log('null2')}
    //             </div>
    //         )

    //   }
    //   export default ScoresContainer;


  


//      }



   



    render() {
        let row=1

        return (
            <div>
                {/*put ()  after getScore */}
                {this.getScore}
            <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Username</th>
          <th scope='col'>Score</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      

      {this.state.scores.map(score=>{
                return(
            <tr>
                <th>{row++}</th>
                <td>{score.user.name}</td>
                <td>{score.score}</td>
            </tr>
                )
            })}



            
                
          {/* {this.renderData()} */}
          
           
            
      </MDBTableBody>
    </MDBTable>
    </div>
    )
}
}

export default ScoresContainer 
