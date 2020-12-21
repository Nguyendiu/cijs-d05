import React, { useState, useEffect } from 'react';
import './asset/App.css'
import fire from './FirebaseConfig';
import Login from './Components/Login'
import Hero from './Components/Hero'
// import Todo from './Components/Todo'
import Form from './Components/Form'
import TodoList from './Components/TodoList'

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);



  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handlerLogin = () => {
    clearError();
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid - email':
          case 'auth/user - disable':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;

        }
      });
  };
  const handleSignUp = () => {
    clearError();
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch (err => {
        switch (err.code) {
          case 'auth/email-alread-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;

        }
      });
  };
  const handleLogOut = () => {
    fire.auth().signOut();

  };
  const authListener = () => {

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs()
        setUser(user);
      } else {
        setUser('');
      }
    })
  };
  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
    authListener();
    
  }, []);
  useEffect(() => {
    filterHandler();
    savetodo()
  }, [todos, status])
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
  return (
    <div class ='App'>
      {user ? (
        <div>
            <Form
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            inputText={inputText}
            setStatus={setStatus}
            handleLogOut={handleLogOut}
            />
             <div className='Right-Content'>
            <h2 className='title-rightContent'>TODO</h2>
             <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
        </div>

      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handlerLogin={handlerLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
         
        )}



</div>
  )
};
export default App;