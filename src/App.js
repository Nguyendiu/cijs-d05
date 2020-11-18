import React from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

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

function App() {
  const [todos, setTodos] = React.useState([
    
  ]);

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
    const newTodo =[...todos,];
    
   }
  return (
    <div className="app">
      {/* <form id="form">
      <input type="text" id="user" placeholder='User..'></input><input type="password" id="password" placeholder='Pass'></input><button id='login' >Đăng Nhập</button><button id='logout'>Đăng xuất</button><button>Đăng kí</button>
      </form> */}
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
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;