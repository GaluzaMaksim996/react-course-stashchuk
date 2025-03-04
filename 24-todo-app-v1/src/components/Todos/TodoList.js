import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoForm({todos, removeTodo}) {

  return (<div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((text, index) => {
        return <Todo key={index} text={text} index={index} removeTodo={removeTodo}/>
      })}
    </div>
  )
}

export default TodoForm;