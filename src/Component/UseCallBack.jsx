import React, { memo, useCallback, useState } from "react";

const UseCallBack = memo(() => {
    let [count,setCount]=useState(0);
console.log('Increment Render');

let increment=useCallback(()=>{
    setCount(Math.floor(Math.random()*1000))
});
  return (
    <div>
      <h1>Learn React by using -UseCallback()</h1>
      <ol>
        <li>To boost the performance of the application.</li>
        <li>Costly operation during unnessary re-rendering</li>
      </ol>
      <p>Count - {count}</p>
      <button onClick={increment}>Random Value</button>
    </div>
  );
});

export default UseCallBack;
