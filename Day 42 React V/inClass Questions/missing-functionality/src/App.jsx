import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  async function fetchAndUpdateData() {
    // Clicking on the button Get and Display post should make an API request to https://jsonplaceholder.typicode.com/posts?_limit=5
    // Get the response display as a card with id,title,body
    // use data to save the response in local state
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      let data = await res.json();
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>
        Clicking on this button should fetch the data from JSON Placeholder API{"https://jsonplaceholder.typicode.com/posts?_limit=5"}
      </h1>
      <button onClick={fetchAndUpdateData}>Get and Display Post</button>
      {
        data == [] ? 
        null :
        data.map((ele) => {
          return (
            <div 
              key={ele.id}
              style={{
                border:"1px solid black",
                margin :"10px",
                padding:"10px",
                backgroundColor:"royalblue"
              }}
              >
                <h2>{ele.title}</h2>
                <p>{ele.body}</p>
            </div>
          )
        })
      }
    </>
  );
}

export default App;
