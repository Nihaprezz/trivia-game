import React from "react"
import { connect } from "react-redux"
import Question from "../components/Question"

class TriviaQuestionsContainer extends React.Component {
    state = {
        questionNum: 0,
        selectedOption: ""
    }

    handleChange = (e) => {
        console.log('handle change function hitting')
        this.setState({selectedOption: e.currentTarget.value})
        this.changeQuestion()
    }

    changeQuestion = () => {
        let level = this.state.questionNum
        level++;
        if (level === 10){
            alert('end of game!')
            window.location.reload();
        } else {
            this.setState({questionNum: level})    
        }  
    }

    render() {
        let currentQuestion = this.props.gameData[this.state.questionNum]
        return (
            <div>
                < Question questionObj={currentQuestion} handleChange={this.handleChange}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { gameData: state.gameData}
}

export default connect(mapStateToProps, null)(TriviaQuestionsContainer)