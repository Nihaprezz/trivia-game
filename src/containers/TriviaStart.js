import React from "react"
import TriviaForm from "../components/TriviaForm"
import TriviaQuestionsCont from "./TriviaQuestionsContatiner"
import { connect } from "react-redux"

class TriviaStart extends React.Component {
    render(){
        return (
            <div> 
                {this.props.gameData.length === 0 ? < TriviaForm /> : < TriviaQuestionsCont />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameData : state.gameData
    }
}

export default connect(mapStateToProps, null)(TriviaStart)