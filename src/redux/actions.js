function setUsers(numOfPlayers) {
    return {type: "SET_PLAYERS", payload: numOfPlayers}
}

function setTriviaData (gameData) {
    return {type: "SET_GAME_DATA", payload: gameData.results}
}

function fetchTriviaData (category, diff) {
    let triviaUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${diff}&type=multiple`
    return (dispatch) => {
        fetch(triviaUrl)
        .then(resp => resp.json())
        .then(gameData => {
            dispatch(setTriviaData(gameData))
        })
    }
}

export { setUsers, fetchTriviaData }
