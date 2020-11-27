import { useState, useEffect } from "react";
import axios from 'axios';

export default function useGame() {

  const [game, setGame] = useState({})

  function startGame(name) {
    console.log("NAME WHEN IN HOOK IS A: ", typeof name, "NAME: ", name)

    const newGame = {player_name: name}
    
    axios.defaults.baseURL = 'http://localhost:3001';

    axios.post('/api/games', newGame)
      .then(data => {
        // The API will send back the ID returned from the database. This can be stored in state
        const newGameId = data.data
        setGame((prev) => {
          return {
            ...prev,
            id: newGameId
          }
        })
      })
      .catch(err => console.log("Error posting Game data: ", err));
  }

  return { game, setGame, startGame };
}