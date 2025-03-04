import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodoHandler = (index) => {
    console.log(index)
    setTodos(todos.filter((_, idx) => idx !== index));
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList todos={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
