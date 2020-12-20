import './App.css';
import React, { useState, useEffect } from 'react'
import { Formlogin,checkUser, submitHanler } from './Components/login'
import { TodoList } from './Components/TodoList'
import { Form } from './Components/Form'
import firebase from 'firebase/app'
import 'firebase/firestore'
// import { firebaseConfig } from '../firebase/firebaseConfig'
import { firebaseConfig } from './firebase'

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e.message)
}

const db = firebase.firestore();
function App() {
  const userLogin = {
    user: 'duy',
    emai: 'duy@123',
    pass: '123'
  }
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run one
  useEffect(() => {
    getLocalTodos();
  }, [])
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [username, setUserName] = useState({ name: '', user: '' });
  const [error, setError] = useState("");
  
  const Logout = () => {
    console.log(Logout)
    setUserName({
      name: '',
      email: ''
    })
  }
  // use eFFect
  useEffect(() => {
    filterHandler();
    savetodo()
  }, [todos, status])
  // funtions

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const savetodo = () => {
    if (localStorage.getItem('todos') === null) {

      localStorage.setItem('todos', JSON.stringify([]));

    } else {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {

      localStorage.setItem('todos', JSON.stringify([]));

    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  };

  let d = new Date()
  console.log(d)

  return (
    <div className='wrappall'>
      <div className='left-Content'>
        <div className='login'>
          {(username.name!== '') ? (
            <div>
              <h2> wellcome {username.name} </h2>
             
              <button onClick={Logout}>logout</button>
            </div>
          ) : (
              <Formlogin   error={error} />
            )}
        </div>
        <div className='todo'>
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
        <h2 className='title-rightContent'>TODO</h2>
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    </div>
  )
}

export default App;
