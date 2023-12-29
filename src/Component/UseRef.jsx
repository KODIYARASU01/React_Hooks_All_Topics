import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  let [value, setValue] = useState("");
  let [count, setCount] = useState(0);
  let counterRef = useRef(0);
  //Input value ref :
  let inputValue = useRef("");

  useEffect(() => {
    inputValue.current = value;
  }, [value]);
  let inputRef = useRef("");

  //AutoFocus function
  useEffect(() => {
    inputRef.current.focus();
  });

  function counterRefFun() {
    counterRef.current++;
  }
  return (
    <div>
      <h1>Learn React by using - UseRef()</h1>
      <small>
        UseRef return a reference ---That means one object it have one property
        like current.
      </small>
      <br></br>
      <small>
        It is a single way binding.only value store without rerender.
      </small>
      <br></br>
      <small>Stop un-necesary rendering.</small>
      <br></br>
      <ol>
        <li>Save Date Without Re-render.</li>

        <h5>Counter : {count}</h5>
        <button onClick={() => setCount(count + 1)}>Re-Render</button>
        <h5>Counter : {counterRef.current}</h5>
        <button onClick={counterRefFun}>Without-Render</button>
        <hr></hr>
        <li>Direct DOM Access</li>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          placeholder="Focus by using useRef"
        ></input>
        <hr></hr>
        <li>Keep Previous state Reference.</li>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          placeholder="Focus by using useRef"
        ></input>
        <p>Current Value = {value}</p>
        <p>Previous Value = {inputValue.current}</p>
      </ol>
      <hr></hr>
    </div>
  );
};

export default UseRef;
