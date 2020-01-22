function setUsers(numOfPlayers) {
    return {type: "SET_PLAYERS", payload: numOfPlayers}
}

export { setUsers }