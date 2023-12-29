import React, { useState, useMemo } from "react";

const UseMemo = () => {
  let [count, setCount] = useState(0);
  //Using UseMemo();
  let expensiveCalculation = () => {
    return Math.random() * 10000;
  };

  let operation = useMemo(() => expensiveCalculation(), [count]);
  return (
    <div>
      <h1>Learn React by using - UseMemo()</h1>
      <small>To boost performance of the application.</small>
      <br></br>
      <small>To memoize the value to boost our application</small>
      <br></br>
      <small>Costly operation during unnessary re-rendering.</small>
      <br></br>
      <small>Optimization</small>
      <br></br>
      <small>Avoid over usage</small>
      <br></br>
      <p>Count - {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>

      <p>Calculation - {operation}</p>
      <hr></hr>
    </div>
  );
};

export default UseMemo;
