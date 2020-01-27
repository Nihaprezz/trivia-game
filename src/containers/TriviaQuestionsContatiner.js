import React from "react"
import { connect } from "react-redux"
import Question from "../components/Question"

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
        
        this.checkAnswer()
        //this.changeQuestion()
    }

    checkAnswer = () => {
        console.log('correct answer', this.state.rightOption)
        console.log('selected option', this.state.selectedOption)
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