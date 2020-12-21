import React from 'react'


const Todo = (todos,setTodo) =>{
   
    return(
        <div className= 'todo'>
            <label>What's todo ?</label>
            <input type= 'text'
            autoFocus
            required
            onChange={e=> setTodo(e.target.value)}
            ></input>
            <label>Name</label>
            <input  type='text'></input>
            <button>Add</button>
        </div>
    )
}
export default Todo;