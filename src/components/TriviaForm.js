import React from "react"
import {connect} from "react-redux"
import { fetchTriviaData } from "../redux/actions"

//will handle constructing the api
class TriviaForm extends React.Component {
    constructor(){
        super();

        this.state = {
            category: "",
            difficulty: "",
            gameReady: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        if (this.state.category === "" || this.state.difficulty === "") {
            alert("Both Category and Difficulty must be selected! Thanks!")
        } else {
            this.props.fetchTriviaData(this.state.category, this.state.difficulty)
        }
    }

    render(){
        return (
            <div>
                <p>Choose the from the options below to generate the Trivia questions!</p>
                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <div className="select">
                        <select name="category" onChange={(e) => this.handleChange(e)}>
                            <option value="">Select Category</option>
                            <option value="15">Video Games</option>
                            <option value="12">Music</option>
                            <option value="10">Books</option>
                            <option value="21">Sports</option>
                            <option value="31">Anime/Manga</option>
                            <option value="32">Cartoons/Animations</option>
                            <option value="25">Art</option>
                            <option value="27">Animals</option>
                        </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Difficulty</label>
                    <div className="control">
                        <div className="select">
                        <select name="difficulty" onChange={(e) => this.handleChange(e)}>
                            <option value="">Select Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        </div>
                    </div>
                </div>

                <button onClick={() => this.handleSubmit()} className="button is-primary">
                    Start Game
                </button>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTriviaData: (category, diff) => dispatch(fetchTriviaData(category, diff))
    }
}

export default connect(null, mapDispatchToProps)(TriviaForm)