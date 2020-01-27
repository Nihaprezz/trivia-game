import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import Question from "../components/Question";
import Swal from 'sweetalert2'

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

export default connect(mapStateToProps, null)(withRouter(TriviaQuestionsContainer))