import { useState } from 'react'
import "./app.css"
function App() {
  const [formState, setFormState] = useState({
    title: "",
    completed: false,
    assignedTo: "",
  });

  function handleChange(event) {
    // logic to update the input value should go here;
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    let newFormState = {
      ...formState,
      [event.target.name]: value
    }
    setFormState(newFormState)
  }
  

  return (
    <>
      <form>
        <input
          name="title"
          placeholder="Add new task"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="completed">
          Completion Status
          <input
            name="completed"
            type="checkbox"
            id="completed"
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <select
          name="assignedTo"
          onChange={handleChange}>
          <option value="">Assign Task to</option>
          <option value="Amar">Amar</option>
          <option value="Akbar">Akbar</option>
          <option value="Anthony">Anthony</option>
        </select>
      </form>
    </>
  );
}

export default App;

