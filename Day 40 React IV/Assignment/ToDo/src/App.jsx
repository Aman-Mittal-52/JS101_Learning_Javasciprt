import { useState } from 'react'
import './App.css'

function App() {
  "use strict"
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  function addTask() {
    if (newTask.trim() != "") {
      setTasks([...tasks, { id: Date.now(), task: newTask, isComplete: false }])
      setNewTask("")
    }
  }

  function setTaskStatus(taskId) {
    setTasks(
      tasks.map((task) => 
        task.id === taskId ?  { ...task , isComplete : !task.isComplete }  : task
      )
    )
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <>
      <h1>Todo List</h1>
      <div id="input">
        <input type="text" name="task" placeholder={`Any 'Task' to do...?`} id="taskInput" value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
        <button id="taskBtn" onClick={addTask}>Add Task</button>
      </div>
      <div id="output">
        <ul>
          {tasks.map((task) => (
            <div className="task">
              <li key={task.id}>{task.task}</li>
              <div className='taskStatus'>
                <button
                  style={{
                    backgroundColor: task.isComplete ? "#2e9c2e" : "crimson"
                  }}
                  onClick={()=>{setTaskStatus(task.id)}}
                  className='taskStatusBtn'>
                  {task.isComplete ? "Completed" : "Pending"}
                </button>
                <button
                  onClick={()=>{deleteTask(task.id)}}
                  className='taskDeleteBtn'>
                  Delete
                </button>
              </div>
            </div>))}
        </ul>
      </div>
    </>
  )
}

export default App
