import React from "react"
import { connect } from "react-redux"
import Question from "../components/Question"

class TriviaQuestionsContainer extends React.Component {
    state = {
        questionNum: 0
    }

    render() {
        let currentQuestion = this.props.gameData[this.state.questionNum]
        return (
            <div>
                < Question questionObj={currentQuestion} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { gameData: state.gameData}
}

export default connect(mapStateToProps, null)(TriviaQuestionsContainer)