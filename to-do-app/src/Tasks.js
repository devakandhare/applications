import React from "react";

function Tasks({ tasks, markDone }) {
  return (
    <div className="tasks-container">
      {tasks.map((theTask) => (
        <div className="task">
          <span
            key={theTask.id}
            className={`task-desc ${theTask.isDone ? "task-completed" : ""}`}
          >
            {theTask.description}
          </span>
          <input
            type="checkbox"
            checked={theTask.isDone}
            disabled={theTask.isDone}
            onClick={() => markDone(theTask.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Tasks;
