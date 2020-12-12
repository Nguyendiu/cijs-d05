import './App.css';
import React, { useState, useEffect } from 'react'
import { Formlogin, Login } from './Components/login'
import { TodoList } from './Components/TodoList'
import { Form } from './Components/Form'
import firebase from './firebase'

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
  const [loading,setLoading] = useState(false)
  const ref = firebase.firestore().collection('Todos')
  console.log(ref)
  function getTodos (){
    setLoading(true)
    ref.onSnapshot((querySnapshot) =>{
      const items=[];
      querySnapshot.forEach((doc)=>{
        items.push(doc.data());
      });
      setTodos(items);
      setLoading(false)
    });
  }
  //run one
  useEffect(() => {
    getLocalTodos();
    getTodos()
  },[])
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [username, setUserName] = useState({ name: '', user: '' });
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);
    if (details.name == userLogin.user && details.password == userLogin.pass) {
      console.log('dang nhap thanh cong')
      setUserName({
        name: details.name,
        email: details.email
      })
    } else {
      console.log('kiem tra lai')
      alert('Check your User again!')
    }
  }
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
  const getLocalTodos = () =>{
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
          {(username.name !== '') ? (
            <div>
              <h2> wellcome {username.name} </h2>
              <button onClick={Logout}>logout</button>
            </div>
          ) : (
              <Formlogin Login={Login} error={error} />
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
