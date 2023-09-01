import React from "react";

const Card = (props) => {
  return (
    <div className="todo-card">
      <div className="todo">{props.todo}</div>
      <div className="actions">
        <button onClick={props.handleBinClick} className="bin button">
          bin
        </button>
        {!props.isComplete && (
          <button onClick={props.handleCompletedClick} className="button">
            completed
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
