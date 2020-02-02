import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { setUsers } from "../redux/actions"

class HomePage extends React.Component {    
    render(){
        return (
            <div className="home-page"> 
                <div className="instructions">
                    <p>How to Play</p>
                    <div>Using the Open Trivia Database test your knowledge! 10 questions will be shown depending on the category and difficulty picked. You can play by yourself or challenge a friend to see who knows trivia better!</div>
                    <div>
                        For two player games the 10 questions will be split. Players will take turns answering questions.
                        Thanks for playing!
                    </div>
                </div>

                <div className="player-count">
                    <p>How many players will be playing?</p>
                    
                    <div className="player-count-btns">
                        <Link to="/trivia" className="button is-primary" onClick={() => this.props.setUsers(1)}>
                             1 Player
                        </Link>

                        <Link to="/trivia" className="button is-primary" onClick={() => this.props.setUsers(2)}> 
                            2 Player
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (numOfPlayers) => {dispatch(setUsers(numOfPlayers))}
    }
}

export default connect(null, mapDispatchToProps)(HomePage);