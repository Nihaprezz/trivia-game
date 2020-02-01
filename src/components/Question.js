import React from "react"
import Option from "../components/Options"

const shuffleArray = (array) => { //helper method used to shuffle the array of options
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    return array
}

const Question = (props) => {
    let { category, difficulty, question, correct_answer} = props.questionObj
    let options = [...props.questionObj.incorrect_answers, correct_answer]
    shuffleArray(options);
    
    let twoPlayerString = props.questionNum % 2 === 0 && props.numOfPlayers === 2 ? <h1>Player 1</h1> : <h1>Player 2</h1>
    // console.log('INSIDE OF THE QUESTION COMPONENT', ' NUM OF PLAYERS: ', props.numOfPlayers)
    // console.log('CURRENT QUESTION NUM', props.questionNum)
    console.log('CHECKING IS NUMBER IS ODD', props.questionNum % 2 )

    return (
        <div> 
            <h1>Category: {category}</h1>
            <h2>Difficulty: {difficulty}</h2>
            <h3>Question: <span dangerouslySetInnerHTML={{ __html: `${question}` }} ></span></h3>
            <p>Options : </p>
            {props.numOfPlayers === 2 && twoPlayerString}
            <div>
            {shuffleArray(options).map(option => {
                return < Option key={option} optionString={option} handleChange={props.handleChange}/>
            })}
            </div>
        </div>
    )
}

export default Question;