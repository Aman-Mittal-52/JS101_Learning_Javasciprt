import { useState, useEffect } from 'react'
import './App.css'
import DataDisplay from './components/DataDisplay';

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setisLoading(true)
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setData(data);
      setisLoading(false)
      console.log(data)
    } catch (error) {
      setisLoading(false)
      setError(error)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {isLoading ? <h1>Loading...</h1> :
        data.map((ele) =>
          <DataDisplay key={ele.id} elem={ele} />
        )
      }
    </>
  )
}

export default App
