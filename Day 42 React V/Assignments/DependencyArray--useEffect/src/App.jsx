import { useState, useEffect } from 'react'
import './App.css'
import ShowPost from './components/PostItem';

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [pageNum, setPAgeNum] = useState(1);

  useEffect(() => {
    fetchData()
  }, [pageNum])

  async function fetchData() {
    try {
      setisLoading(true)
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNum}`);
      let data = await res.json();
      setData(data);
      setisLoading(false)
    } catch (error) {
      setisLoading(false)
      setError(error)
      console.log(error);
    }
  }

  return (
    <>
        <button onClick={() => { setPAgeNum(pageNum - 1) }}>Previous</button>
        {'You are on pageNum ' + pageNum}
        <button onClick={() => { setPAgeNum(pageNum + 1) }}>Next</button>
        {isLoading ? <h1>Loading...</h1> :
          data.map((ele) =>
            <ShowPost elem={ele} />
          )
        }
    </>
  )
}

export default App






