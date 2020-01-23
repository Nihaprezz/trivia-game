import React from "react"
import TriviaForm from "../components/TriviaForm"

class TriviaStart extends React.Component {
    render(){
        return (
            <div> 
                <p>Choose the from the options below to generate the Trivia questions!</p>
                < TriviaForm />
            </div>
        )
    }
}

export default TriviaStart