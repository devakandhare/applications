import React from "react";

function makeFirstLetterUppercase(value) {
    return value[0].toUpperCase() + value.slice(1);
}

function Task({ id, description, isDone, markDone }) {
  return (
    <div className="task">
      <span key={id} className={`task-desc ${isDone ? "task-completed" : ""}`}>
        {makeFirstLetterUppercase(description)}
      </span>
      <input
        className="task-checkbox"
        type="checkbox"
        checked={isDone}
        disabled={isDone}
        onChange={() => markDone(id)}
      />
    </div>
  );
}
function Tasks({ tasks, markDone }) {
  return (
    <div className="tasks-container">
      {tasks.map(({ id, description, isDone }) => (
        <Task
          key={id}
          id={id}
          description={description}
          isDone={isDone}
          markDone={markDone}
        />
      ))}
    </div>
  );
}

export default Tasks;
