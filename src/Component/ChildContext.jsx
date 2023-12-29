import React, { useContext } from "react";
import UserContext from "./UseContext";

const ChildContext = () => {
  const values = useContext(UserContext);

  const [user, setUser] = values;
  return (
    <div>
      <h1>Learn React by using - useContext ()</h1>
      <small>UseContext is used to manage global state.</small>
      <br></br>
      <h5>Creating useContext threee steps</h5>
      <ol>
        <li>
          First we need to initialize createContext seperate component and
          export it
        </li>
        <li>
          Import the createContext to app component after to initialize
          provider.
        </li>
        <li>
          Next which component is used to access data to import usecontext and
          userContext component.
        </li>
      </ol>
      <h4>
        Child component access state value by using useContext.==={" "}
        {JSON.stringify(user)}
      </h4>

      <button onClick={() => setUser({ name: "kodiyarasu", age: 23 })}>
        Login
      </button>
      <button onClick={() => setUser({})}>LogOut</button>
      <hr></hr>
    </div>
  );
};

export default ChildContext;
