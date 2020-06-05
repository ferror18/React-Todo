import React from "react";

export const TodoForm = props=>{
    return (
        <div>
        <input type='text'/>
        <button onClick={props.addTodo} >Add Todo</button>
        <button onClick={props.clearComplete}>Clear Complete</button>
        </div>
    )
}