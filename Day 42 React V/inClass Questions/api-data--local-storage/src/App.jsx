import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect( function () {
    // Complete the code
    fetchAndUpdateData();
  }, [])
  
  
  async function fetchAndUpdateData() {
    // Complete the code
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      let data = await res.json();

      localStorage.setItem("data",JSON.stringify(data))
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  console.log("third");
  return (
    <>
      <br />
      {data.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <p>ID : {post.id}</p>
          <p>Title : {post.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;

