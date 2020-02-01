import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import Swal from 'sweetalert2'

import Question from "../components/Question";
import Score from "../components/Score"
import ScoreBoard from "../components/ScoreBoard"

class TriviaQuestionsContainer extends React.Component {
    state = {
        questionNum: 0,
        selectedOption: "",
        rightOption: "",
    }

    componentDidMount(){
        let rightAnswer = this.props.gameData[this.state.questionNum].correct_answer
        this.setState({rightOption: rightAnswer})
    }

    handleChange = (e) => {
        this.setState({selectedOption: e.currentTarget.value}) //update state with the option the user picks
        
        this.checkAnswer(e.target.value) //goes to checking the answer
    }

    checkAnswer = (selectedOption) => {
        console.log('correct answer', this.state.rightOption)
        console.log('selected option', selectedOption)

        if (selectedOption === this.state.rightOption) {
                this.fireAlert('Right')
        } else {
                this.fireAlert('Wrong')
        }
    }

    //will handle firing the alert depending on the text that is passed in.
    fireAlert = (resultTxt) => {
        Swal.fire({
            title: 'Results',
            text: `${resultTxt} Answer`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Next Question',
            cancelButtonText: 'Quit Game'
        })
        .then((result) => {
            if(result.value) {
                console.log("accepted")
                this.changeQuestion()
            } else {
                console.log('dismissed!')
                this.props.history.push('/')
            }
        })
    }

    changeQuestion = () => {
        let level = this.state.questionNum
        level++;

        //need to figure out how to refetch
        
        if (level === 10){
            this.setState({questionNum: level})
            //last time incrementing the question Num, once level is set to 10 it will trigger showing the score.
        } else {
            this.setState({questionNum: level, rightOption: this.props.gameData[level].correct_answer}) 
            // changes the question and the correct answer which will be in the state
        }  
    }

    render() {
        let currentQuestion = this.props.gameData[this.state.questionNum]

        let showScore = this.props.numOfPlayers === 1 ? < Score /> : < ScoreBoard /> //scoreboard set depends on the num of players

        return (
            <div>
                {this.state.questionNum === 10 ? showScore : (
                    < Question questionObj={currentQuestion} handleChange={this.handleChange} numOfPlayers={this.props.numOfPlayers} questionNum={this.state.questionNum}/>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { gameData: state.gameData, numOfPlayers: state.numOfPlayers}
}

export default connect(mapStateToProps, null)(withRouter(TriviaQuestionsContainer))