import React from 'react'
import '../asset/Todo.css'


export const Todo = ({ text ,todo ,todos ,setTodos}) => {
    const deletehandle = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        // console.log(todo)
    };
    const completeHanler = () =>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{...item, completed: !item.completed,};    
            }
            return item ;
        })
        );
    };
    // const editHandler = () =>{
    //     console.log('chua lam xong')
    // }
    return (
        <div  >
            <li className={`todo-item ${todo.completed ? 'completed':''}`}>
            {text}
            </li>
            <button onClick={completeHanler}>Done</button>
            <button onClick={deletehandle}>Delete</button>
            {/* <button onClick={editHandler}>Edit</button> */}
           
        </div>
    );
}
export default Todo;