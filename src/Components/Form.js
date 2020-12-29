import React from 'react'
import '../asset/Form.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import fire from '../FirebaseConfig';
import TodoList from './TodoList'
const db = firebase.firestore();
export const Form = ({ setInputText, setTodos, todos, inputText, setStatus, handleLogOut }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)

  };
  
  const submitTodohandler = (e) => {
   
    const random = Math.floor(Math.random() * 1000);
    e.preventDefault()
    if (inputText !== '') {
      console.log('ok')
      setTodos([...todos, { text: inputText, completed: false, id: random }])
      setInputText('');
    }
    db.collection("ListTodos").add({
      items: inputText,
      id: random,

    }).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    console.log(inputText)
  }
  const statusHanler = (e) => {
    setStatus(e.target.value)
  }
  
  return (

    <form className='form'>
      <section className='logout'>
        <nav>
          <h2>Wellcome</h2>

          <button onClick={handleLogOut}>Logout</button>
        </nav>

      </section>
      <div className='todo' onSubmit={submitTodohandler} >
        <p>What's Todo ?</p><br/>
        
        <input id='inputTodos' value={inputText} type='text' onChange={inputTextHandler} />
        <button type='submit' onClick={submitTodohandler} >add</button>

        <p>Check Status Todo</p>
        <select onChange={statusHanler}>
          <option value='all'>All</option>
          <option value='completed'>Compeleted</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>

    </form>
  )
};
export default Form;