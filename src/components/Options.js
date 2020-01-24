import React from 'react'

const Option = (props) => {
    return (
        <label>
            <input type="radio" name="answer" value={props.optionString}/>
            {props.optionString}
        </label>
    )
}

export default Option;