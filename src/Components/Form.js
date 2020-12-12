import React from 'react'
import '../asset/form.css'
import moment, { now } from 'moment'
import firebase from 'firebase'
import { firebaseConfig } from '../firebase/firebaseConfig'
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
    db.collection('Todos').add({
      text: inputText,
      id: Math.floor(Math.random() * 1000)

    })
    const random = Math.floor(Math.random() * 1000);
    e.preventDefault()
    if (inputText !== '') {
      console.log('ok')
      setTodos([...todos, { text: inputText, completed: false, id: random }])
      setInputText('');
    }

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