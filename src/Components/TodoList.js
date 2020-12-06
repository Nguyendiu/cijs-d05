import React from 'react'
import {Todo} from './Todo'
export const TodoList = ({todos,setTodos})=>{
    // const [todos, setTodos] = useState([]);
    console.log(todos);
    return(
        <div>
            <ul>
           {todos.map((todo =>(
               <Todo  
               key ={todo.id}
               text={todo.text}
               todo={todo}
               todos={todos} 
               setTodos={setTodos}/>
           )))}
            </ul>
        </div>
    )
}
export default TodoList;