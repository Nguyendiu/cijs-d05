import React from 'react'
import '../asset/form.css'

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