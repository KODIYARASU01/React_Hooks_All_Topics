import React, { useEffect } from "react";

const UseEffect = () => {
  //Initial rendering:
  // useEffect(() => {
  //   document("Hi,Guys");
  // }, []);

  return (
    <div>
      <h1>Learn React by using - UseEffect()</h1>
      <h5>There are three type of useEffect rendering :</h5>
      <ul>
        <li>
          Initial Rendering (or) single time only rendering --- Dependency array
          like = []
        </li>
        <li>
          State based Rendering --- Dependency array like = [count]---count is a
          state value
        </li>
        <li>
          All time Rendering --- Dependency array is removed only useEffect
          method only taken
        </li>
      </ul>

      <hr></hr>
    </div>
  );
};

export default UseEffect;
