import React from "react"


//will handle constructing the api
class TriviaForm extends React.Component {

    render(){
        return (
            <div>
                
                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <div className="select">
                        <select>
                            <option>Select Category</option>
                            <option>Video Games</option>
                            <option>Music</option>
                            <option>Books</option>
                            <option>Sports</option>
                            <option>Anime/Manga</option>
                            <option>Comics</option>
                            <option>Art</option>
                            <option>Animals</option>
                        </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Difficulty</label>
                    <div className="control">
                        <div className="select">
                        <select>
                            <option>Select Difficulty</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                        </div>
                    </div>
                </div>

                <button className="button is-primary">Start Game</button>

            </div>
        )
    }
}

export default TriviaForm