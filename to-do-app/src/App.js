import React, { useState } from "react";
import Tasks from "./Tasks";
import "./App.scss";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function markDone(taskId) {
    setTasks((prevTasks) => {
      return prevTasks.map((theTask) => ({
        ...theTask,
        isDone: theTask.id === taskId ? true : theTask.isDone,
      }));
    });
  }
  function handleAddTask() {
    setTasks((prevTasks) => {
      const newTask = {
        id: new Date().getTime(),
        description: task,
        isDone: false,
      };
      setTask("");
      return [...prevTasks, newTask];
    });
  }

  function handleChangeTask(e) {
    setTask(e.target.value);
  }

  return (
    <React.Fragment>
      <div className="app">
        <div className="input-container">
          <input type="text" value={task} onChange={handleChangeTask} />
          <button onClick={handleAddTask}>Add Me</button>
        </div>
        <Tasks tasks={tasks} markDone={markDone} />
      </div>
    </React.Fragment>
  );
}

export default App;
