import React, { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Learn React Hooks - UseState()</h1>
      <small>UseState manage local state.</small>
      <small>When State changes component will be rerender.</small>
      <small>
        It is two way binding.State value also change and component also
        rerender that is called 2 way binding.
      </small>
      <h3>Counter app by using UseState Hook</h3>
      <p>Use State used to manage local state.</p>
      <h4>Count : {count}</h4>

      <button onClick={() => setCount((preCount) => preCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((preCount) => preCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount((preCount) => (preCount = 0))}>
        Reset
      </button>

      <hr></hr>
    </div>
  );
};

export default UseState;
