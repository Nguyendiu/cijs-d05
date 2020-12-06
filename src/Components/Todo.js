import React from 'react'



export const Todo = ({ text ,todo ,todos ,setTodos}) => {
    const deletehandle = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        // console.log(todo)
    };
    
    return (
        <div>
            <li>
            {text}
            </li>
            <button>Edit</button>
            <button onClick={deletehandle}>Delete</button>
           
        </div>
    );
}
export default Todo;