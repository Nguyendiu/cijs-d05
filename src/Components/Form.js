import React from 'react'

 export const Form = ({setInputText,setTodos,todos, inputText,setStatus}) =>{
  const inputTextHandler = (e)=> {
     setInputText(e.target.value)

   } ;
   const submitTodohandler = (e) =>{
     const random = Math.floor(Math.random() * 100);
     e.preventDefault()
      setTodos([...todos,{ text :inputText , completed: false , id : random}])
      setInputText('');
      // console.log(inputText)
   }
   const statusHanler = (e)=>{
    setStatus(e.target.value)
}
    return (
       <form>
           <input value={inputText} type='text' onChange={inputTextHandler}/> 
           <button type='submit' onClick={submitTodohandler}>add</button>
           <div>
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