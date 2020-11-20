// Libraries
import React from "react";

// Components
import PlayerAction from './PlayerAction';

function PlayerActionList(props) {

  const actions = props.playerActions.map(action => {
    return (
      <PlayerAction
        key={action.name}
        name={action.name}
        word={props.onNewWord()}
      />
    )
  });
    
  return (
    <>
      <h1>PlayerActionList</h1>
        <ul>
          {actions}
        </ul>
    </>
  )
}

export default PlayerActionList;