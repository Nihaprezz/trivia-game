import { combineReducers } from "redux"

const playerReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_PLAYERS":
            return action.payload
        default:
            return state
    }
}

const gameReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_GAME_DATA":
            return action.payload
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    numOfPlayers: playerReducer,
    gameData: gameReducer
});

export default rootReducer;