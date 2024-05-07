import React from "react";
import Button from "./Button";
import useCount from "./store";

const App = () => {
  const [count, setCount] = useCount();

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Button />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button />
      </div>
    </div>
  );
};

export default App;
