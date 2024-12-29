import React, { useState } from "react";
import MyTable from "./MyTable";
import { PlusCircle } from "lucide-react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const handleTaskSubmission = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError("Please enter a task");
    } else {
      setError(null);
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={handleTaskSubmission} className="task-input">
        <input
          type="text"
          name="text"
          id="task"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit" className="add-task">
          <PlusCircle size={24} />
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {tasks.length > 0 && <MyTable tasks={tasks} setTasks={setTasks} />}
    </div>
  );
}
