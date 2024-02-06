import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: newValue });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formState.task || !formState.taskAssignedTo) return;
    setTasks([...tasks, formState]);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Add Task"
            value={formState.task}
            onChange={handleChange}
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              checked={formState.completed}
              onChange={handleChange}
            />
          </label>
          <select
            name="taskAssignedTo"
            value={formState.taskAssignedTo}
            onChange={handleChange}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          index={index}
          item={item}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </>
  );
}

export default App;