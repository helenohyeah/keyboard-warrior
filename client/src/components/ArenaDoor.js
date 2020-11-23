// Libraries
import React from "react";

function ArenaDoor(props) {

  return (
    <div className="door">
      <h3 className="door-title">{props.name}</h3>
      <div>
        <img src={props.imgCard} alt={props.name}></img>
      </div>
      <button className="enter-button" type="button" disabled={props.beaten}
        onClick={() => {
          props.setGameMode("ARENA")
          props.setArena({
            name: props.name,
            arena_card: props.imgCard,
            background_image: props.imgBack,
            background_music: props.music
          })

        }}>
        Enter Door</button>
        {props.beaten && <aside>{props.beaten ? "You beat this level already 🥳" : null}</aside>} 
    </div>
  );
}

export default ArenaDoor;