import React, { useReducer, useState } from "react";
import ToDo from "./ToDo";

//Usereducer counter function
function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };

    case "Decrement":
      if (state.count > 0) {
        return {
          count: state.count - 1,
        };
      } else {
        return state;
      }
    case "Reset":
      return {
        count: (state.count = 0),
      };
  }
}

//Usereducer Todo function
function todoReducer(todo, action) {
  switch (action.type) {
    case "add-todo":
      return [...todo, newtodo(action.payload.input)];

    case "toggle-todo":
      return todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case "delete-todo":
      return todo.filter((todo) => todo.id !== action.payload.id);

    default: {
      return todo;
    }
  }
}

//newTodoFunction :
function newtodo(input) {
  return {
    id: new Date(),
    input: input,
    completed: false,
  };
}
//Color Changing useReducer:
let initialColor = { backgroundColor: "#fff" };

function colorReducer(color, action) {
  switch (action) {
    case "red":
      return {backgroundColor: "red" };

    case "black":
      return { backgroundColor: "#000" };

    default:
      return { backgroundColor: initialColor };
  }
}
//Main Component:
const UseReducer = () => {
  let [state, dispatch] = useReducer(reducer, { count: 0 });
  let [todo, dispatch1] = useReducer(todoReducer, []);
  let [input, setInput] = useState("");
  let [color, dispatch2] = useReducer(colorReducer, { initialColor });
  console.log(todo);

  //SUbmitForm Function
  function handleSubmit(e) {
    e.preventDefault();
    dispatch1({ type: "add-todo", payload: { input: input } });
    setInput("");
  }
  return (
    <div>
      {/* Counter  */}
      <h1>To Learn React Hooks - UseReducer()</h1>
      <p>UseReducer used to manage local state.</p>
      <small>Multiple & complex value manage by using useReducer method.</small>
      <h3>Count by using UseReducer:</h3>
      <h4>Count : {state.count}</h4>

      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>

      <hr></hr>
      {/* Form todo */}
      <h1>Todo List App Using UseReducer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
      </form>

      <hr></hr>
      <h3>Todo List</h3>

      {todo.map((todo) => (
        <ToDo key={todo.id} todo={todo} dispatch1={dispatch1} />
      ))}

      <hr></hr>
      <h3>Color Change :</h3>

      <p style={{backgroundColor:color.backgroundColor}}>Hello Reducer</p>
      <button onClick={()=>dispatch2('red')}>Red color</button>
      <button onClick={()=>dispatch2('black')}>Black color</button>
    </div>
  );
};

export default UseReducer;
