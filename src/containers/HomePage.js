import React from "react";

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
                    <div>Using the Open Trivia Database </div>
                </div>

                <div className="player-count">
                    <p>How many players will be playing?</p>
                    
                    <div className="player-count-btns">
                        <button className="button is-primary">1 Player</button>
                        <button className="button is-primary">2 Players</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;