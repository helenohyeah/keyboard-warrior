import React, { useEffect } from 'react';

const LoseGameNotBoss = (props) => {

  useEffect(() => {
    props.soundMedia.current.src = '/sounds/lose-game.mp3';
    return (() => {
      props.soundMedia.current.src = '/sounds/background-music.ogg';
    });
  }, [props.soundMedia]);

  return (
    <main className="outcome lose-game">
      <p className="message">
        <h1>DEFEAT</h1>
        <p>Woah, you are terrible at this! You lost so many arenas there's no way you can make it to verse the boss now. You can try again from the beginning though.</p>
        <button className="primary" onClick={() => {
          props.resetGame()
          }
          }>Back to start</button>
      </p>
    </main>
  );
};
export default LoseGameNotBoss;