import { combineReducers } from "redux"

const playerReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_PLAYERS":
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    numOfPlayers: playerReducer
});

export default rootReducer;