import React from "react";

function TaskItem({ item, index, deleteTask, toggleTask }) {
  return (
    <div style={{ color: item.completed ? "green" : "red" }}>
      {item.task} - Assigned to: {item.taskAssignedTo} -{" "}
      {item.completed ? "Completed" : "Incomplete"}
      <button onClick={() => toggleTask(index)}>Toggle Task</button>
      <button onClick={() => deleteTask(index)}>Delete Task</button>
    </div>
  );
}

export default TaskItem;
