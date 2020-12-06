import React from 'react'

 export const Form = ({setInputText,setTodos,inputText}) =>{
   const todos =[] 
  const inputTextHandler = (e)=> {
    console.log(todos)
     setInputText(e.target.value)
   } ;
   const submitTodohandler = (e) =>{
     e.preventDefault()
     console.log(e.target.value)
     console.log('dssada')
    
    setTodos([...todos,{text :inputText , compeleted: false}]);
    todos.push({inputText:'111'})
    console.log(todos)
      // setInputText=''
   }
    return (
       <form>
           <input type='text' onChange={inputTextHandler}/>
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