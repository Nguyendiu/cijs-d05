import React from 'react'

 export const Form = ({setInputText,setTodos,todos, inputText}) =>{
  const inputTextHandler = (e)=> {
     setInputText(e.target.value)

   } ;
   const submitTodohandler = (e) =>{
     const random = Math.floor(Math.random() * 100);
     e.preventDefault()
      setTodos([...todos,{ text :inputText , completed: false , id : random}])
      setInputText('');
      console.log(inputText)
   }
    return (
       <form>
           <input value={inputText} type='text' onChange={inputTextHandler}/> 
           <button type='submit' onClick={submitTodohandler}>add</button>
           <select>
             <option>All</option> 
             <option>Compeleted</option>
             <option>Uncompleted</option>
           </select>
       </form>
    )
};
export default Form;