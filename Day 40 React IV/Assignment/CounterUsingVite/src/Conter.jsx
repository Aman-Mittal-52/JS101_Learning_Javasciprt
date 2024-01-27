import { useState } from "react";

function Counter(){
  let [count,setCount] = useState(1)
    // Your code here
    return (
        <>
            <div id="display">
                <h1>Count : {count}</h1>
            </div>
            <div id="buttons">
                <button onClick={() => { setCount(count - 1) }}>Decrease</button>
                <button onClick={() => { setCount(count + 1) }}>Increase</button>
            </div>
        </>
    )
}

export default Counter