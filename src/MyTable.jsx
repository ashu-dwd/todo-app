import React, { useState } from "react";
import { Check, Trash2, RotateCcw } from "lucide-react";

const MyTable = ({ tasks, setTasks }) => {
  const [completedTasks, setCompletedTasks] = useState(
    Array(tasks.length).fill(false)
  );

  const markComplete = (index) => {
    // Create a shallow copy of the completedTasks array to avoid mutating the original state
    const updatedCompletedTasks = [...completedTasks];
    // Toggle the completion status of the task at the specified index
    updatedCompletedTasks[index] = !updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`task-item ${completedTasks[index] ? "completed" : ""}`}
        >
          <span className="task-name">{task}</span>
          <div className="task-actions">
            <button
              className="action-btn complete"
              onClick={() => markComplete(index)}
              aria-label={
                completedTasks[index]
                  ? "Mark as incomplete"
                  : "Mark as complete"
              }
            >
              {completedTasks[index] ? (
                <RotateCcw size={28} />
              ) : (
                <Check size={28} />
              )}
            </button>
            <button
              className="action-btn delete"
              onClick={() => deleteTask(index)}
              aria-label="Delete task"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTable;
