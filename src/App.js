import './App.css';
import React ,{useState} from 'react'
import {Login} from './Components/login'
import {TodoList} from './Components/TodoList'
import {Form} from './Components/Form'
 function App() {
    const [inputText,setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    return (
      <div className='wrappall'>
        <div className='left-Content'>
          <div className='login'>
            <Login />
          </div>
          <div className ='todo'>
            <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
          </div>

        </div>
        <div className='Right-Content'>
              <TodoList todos={todos} setTodos={setTodos}/>
        </div>
      </div>
    )
}

export default App;
