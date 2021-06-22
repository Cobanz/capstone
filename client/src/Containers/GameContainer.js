import React from 'react'




class GameContainer extends React.Component{

    componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
       return <div>game goes here</div>
    }
}

export default GameContainer 