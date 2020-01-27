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

    return (
        <div> 
            <h1>Category: {category}</h1>
            <h2>Difficulty: {difficulty}</h2>
            <h3>Question: <span dangerouslySetInnerHTML={{ __html: `${question}` }} ></span></h3>
            <p>Options : </p>
            <div>
            {shuffleArray(options).map(option => {
                return < Option key={option} optionString={option} handleChange={props.handleChange}/>
            })}
            </div>
        </div>
    )
}

export default Question;