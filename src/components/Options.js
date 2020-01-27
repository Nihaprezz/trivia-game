import React from 'react'

const Option = (props) => {
    return (
        <label>
            <input onChange={(e) => props.handleChange(e)} type="radio" name="answer" value={props.optionString}/>
            <div dangerouslySetInnerHTML={{ __html: `${props.optionString}`}}/>
        </label>
    )
}

export default Option;