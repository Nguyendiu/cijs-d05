import './App.css';
import React ,{useState, useEffect} from 'react'
import {Login} from './Components/login'
import {TodoList} from './Components/TodoList'
import {Form} from './Components/Form'
 function App() {
  
    const [inputText,setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status,setStatus] = useState('all');
    const [filteredTodos,setFilteredTodos]= useState([]);
     // use eFFect
     useEffect(()=>{
      filterHandler();
     },[todos, status])
    // funtions
    const filterHandler = () =>{
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo =>todo.completed === false));
          break;
          default:
            setFilteredTodos(todos);
            break;
      }
    };
   
    return (
      <div className='wrappall'>
        <div className='left-Content'>
          <div className='login'>
            <Login />
          </div>
          <div className ='todo'>
            <Form 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
            inputText={inputText}
            setStatus={setStatus}
            />
          </div>

        </div>
        <div className='Right-Content'>
              <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </div>
      </div>
    )
}

export default App;
