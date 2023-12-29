import React from 'react'

const ToDo = ({todo,dispatch1}) => {
  return (
    <div>
     <span style={{color:todo.completed?'#AAA':'#000'}}>{todo.input}</span>
     <button onClick={()=>dispatch1({type:'toggle-todo',payload:{id:todo.id}})} >Toggle</button>
     <button onClick={()=>dispatch1({type:'delete-todo',payload:{id:todo.id}})} >Delete</button>
    </div>
  )
}

export default ToDo