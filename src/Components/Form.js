import React from 'react'
import '../asset/form.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../firebase/firebaseConfig'

import userEvent from '@testing-library/user-event'


try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e.message)
}

const db = firebase.firestore();
export const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
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
      items : inputText,
      id :  random,
    
    }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
    console.log(inputText)
  }
  const statusHanler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form className='form'>
      <p>What's Todo ?</p>
      <input value={inputText} type='text' onChange={inputTextHandler} />
      <button type='submit' onClick={submitTodohandler}>add</button>
      <div>
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