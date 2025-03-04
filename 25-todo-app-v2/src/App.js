import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import './App.css';
import TodosActions from "./components/Todos/TodosActions";

function App() {

  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      isCompleted: false
    }

    setTodos([...todos, newTodo]);
  }

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toddleTodoHandler = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id
        ? {...todo, isCompleted: !todo.isCompleted}
        : {...todo}
    ));
  }

  const deleteTodosHandler = () => {
    setTodos([]);
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      {!!todos.length && (
        <TodosActions completedTodosExist={!completedTodosCount}
                      deleteTodos={deleteTodosHandler}
                      deleteCompletedTodos={deleteCompletedTodosHandler}
        />)}
      <TodoList todos={todos} removeTodo={removeTodoHandler} toggleTodo={toddleTodoHandler}/>
      {!!completedTodosCount &&
        <h2>{`You have completed ${completedTodosCount} ${completedTodosCount === 1 ? 'todo' : 'todos'}`}</h2>}
    </div>
  );
}

export default App;
