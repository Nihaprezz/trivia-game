import React from "react";
import { Link } from "react-router-dom"

class HomePage extends React.Component {
    // constructor(){
    //     super();

    //     this.state = {
    //         questions: []
    //     };
    // }

    // componentDidMount(){
    //     fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple')
    //     .then(resp => resp.json())
    //     .then(data => this.setState({
    //         questions: data.results
    //     }))
    // }
    
    render(){
        return (
            <div className="home-page"> 
                <div className="instructions">
                    <p>How to Play</p>
                    <div>Using the Open Trivia Database test your knowledge! 10 questions will be shown depending on the category and difficulty picked. You can play by yourself or challenge a friend to see who knows trivia better! Thanks for playing!</div>
                </div>

                <div className="player-count">
                    <p>How many players will be playing?</p>
                    
                    <div className="player-count-btns">
                        <Link to="/trivia" className="button is-primary"> 1 Player</Link>
                        <Link to="/trivia" className="button is-primary"> 2 Player</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;