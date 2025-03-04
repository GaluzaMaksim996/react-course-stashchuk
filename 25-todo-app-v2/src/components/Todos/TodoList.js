import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoForm({todos, removeTodo, toggleTodo}) {

  return (<div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo,) => {
        return <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      })}
    </div>
  )
}

export default TodoForm;