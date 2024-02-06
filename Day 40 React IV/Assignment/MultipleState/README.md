
## Setup Instructions
1. Create a new Vite project:
    - Open your terminal.
    - Run `npm create vite@latest <name-of-app> -- --template react` to create a new project.
    - Navigate into the project directory using `cd <name-of-app>`.
2. Install Dependencies:
    - Inside your project directory, run `npm install` to install necessary dependencies.
3. Start the Development Server:
    - Run `npm run dev` to start the Vite development server.
    - Open http://localhost:3000 in your browser to see your project.

  <hr>

# Expected Outcomes

## Code 1 Analysis :
1. Understand and explain the asynchronous nature of `setCount`
   - In the↴
    ``` JavaScript
    import React from 'react'
    // Your task is to explain why the console.log shows the older value of count
    function App() {
      const [count, setCount] = React.useState(0);

      const handleClick = () => {
        setCount(count + 1);
        console.log(count); // You will see the older value of count in console
      };

      return (
        <div>
          <p>Button is clicked {count} times</p>
          <button onClick={handleClick}>Click Me</button>
        </div>
      );
    }

    export default App

    ```
    - when the `Button` clicked it will console the older value of the `State`
    - Because `console.log(count)` makes it asynchronous task. it prints first and then 
2. Suggest a solution to log the updated count value.