import React from "react";
import "./App.css";

// Child
function Todo({ todo, index, completeTodo, removeTodo,updateTodo, text}) {
  return (
    <div>
      <div >
      <input className="todo"
       value={todo.text} // và cái input này lại ko có onChange, nói chung rối nhùi lun
       style={{ textDecoration: todo.isCompleted ? "line-through" : " " }}
      ></input>
        <button onClick={() => completeTodo(index)} id="complele">Done</button>
        <button onClick={() => updateTodo(index)} id="upd" >update</button>
        <button onClick={() => removeTodo(index)} id="del">X</button>
        {/* <button onClick={() => this.ok}>Ok</button> */}
      </div>
     
    </div>
  );
}

// ko nên chia cái todo form này ví đó chưa biến chính value. 
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        placeholder="Danh sách Việc cần làm........................................................................................Enter"
        id="input"
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

// Main. cai nay chia ra ok ko? 
function App() {
  const [todos, setTodos] = React.useState([
    
  ]);
  const [value, setValue] = React.useState(""); 
  // vì cái update cần cái value này nên nó phải ở đây, ô để ra component con thì sao lấy dc

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    
  };
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

   const updateTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].text= value // de tao 1 nut upate
    console.log(newTodos[index].text);
    console.log(todos)
    setTodos(newTodos);
   }
  // const updateTodo = index =>{
  //   const x = [...todos];
  //  const x2 = x[index];
  
  //  }
  return (
    <div className="app">
      <form id="form">
      <input type="text" id="user" placeholder='User..'></input><input type="password" id="password" placeholder='Pass'></input><button id='login' >Đăng Nhập</button><button id='logout'>Đăng xuất</button><button>Đăng kí</button>
      </form>
      <div id="logo" >
      <img src="https://i2.wp.com/eparking.vn/wp-content/uploads/2020/04/cropped-epaking-CLoud-1.png?fit=205%2C58"  />
      </div>
      <h1 id="supermen">SUPERMEN</h1>
      <h2 id="title">DANH SÁCH CÔNG VIỆC CẦN XỬ LÝ</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
  
          />
        ))}
        {/* <TodoForm addTodo={addTodo} /> */}
        <form onSubmit={handleSubmit}>
      
      <input
        placeholder="Danh sách Việc cần làm........................................................................................Enter"
        id="input"
        type="text"
        className="input"
        value={value}
        // onChange={e => setValue(e.target.value)}
        onChange={e => setValue(e.target.value)}
      />
    </form>
      </div>
    </div>
  );
}

export default App;