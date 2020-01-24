import React from "react"
import { connect } from "react-redux"

class TriviaQuestionsContainer extends React.Component {
    state = {
        questionNum: 0
    }

    render() {
        console.log(this.props, this.state)
        return (
            <div>This is the trivia questions container</div>
        )
    }
}

const mapStateToProps = state => {
    return { gameData: state.gameData}
}

export default connect(mapStateToProps, null)(TriviaQuestionsContainer)