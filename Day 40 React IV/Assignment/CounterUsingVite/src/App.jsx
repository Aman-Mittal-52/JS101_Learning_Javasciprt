import { useState } from 'react';
import Counter from './Conter';
import './App.css';
function App() {
  let [count, setCount] = useState(1)
  return (
    <Counter />
  )
}

export default App;