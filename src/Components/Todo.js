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
        <div className='to-do'>
            <li className={`todo-item ${todo.completed ? 'completed':''}`}>
            {text} 
            </li>
            <p id='time'>{(new Date()).toLocaleString()}</p>
            <button className='btn' onClick={completeHanler}>Done</button>
            <button className='btn' onClick={deletehandle}>Delete</button>
            {/* <button onClick={editHandler}>Edit</button> */}
           
        </div>
    );
}
export default Todo;