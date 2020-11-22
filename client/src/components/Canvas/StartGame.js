// Libraries
import React from "react";

// Styles
import './StartGame.scss';

function StartGame(props) {
  return (
    <main className="start-game">
      <h1>Start Game</h1>
      <div className="menu">
        <button
          onClick={() => { props.setMode("MAP") }}
        >Start Game
        </button>
        (Following buttons don't do anything yet:)
        <button>Credits</button>
        <button>Instructions</button>
        <button>Settings</button>
      </div>
    </main>
  );
}

export default StartGame;