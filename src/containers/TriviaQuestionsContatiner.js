import React from "react";
import { connect } from "react-redux";
import Question from "../components/Question";

class TriviaQuestionsContainer extends React.Component {
    state = {
        questionNum: 0,
        selectedOption: "",
        rightOption: ""
    }

    componentDidMount(){
        let rightAnswer = this.props.gameData[this.state.questionNum].correct_answer
        this.setState({rightOption: rightAnswer})
    }

    handleChange = (e) => {
        this.setState({selectedOption: e.currentTarget.value})
        
        this.checkAnswer(e.target.value)
        this.changeQuestion()
    }

    checkAnswer = (selectedOption) => {
        console.log('correct answer', this.state.rightOption)
        console.log('selected option', selectedOption)

        if (selectedOption === this.state.rightOption) {
            alert('right answer!')
        } else {
            alert('wrong answer!')
        }
    }

    changeQuestion = () => {
        let level = this.state.questionNum
        level++;
        
        if (level === 10){
            alert('end of game!')
            window.location.reload();
        } else {
            this.setState({questionNum: level, rightOption: this.props.gameData[level].correct_answer}) // changes the question and the correct answer which will be in the state
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