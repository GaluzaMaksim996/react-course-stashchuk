import { RiTodoFill } from "react-icons/ri";
import styles from './Todo.module.css';

function Todo({text, index, removeTodo}) {

  return (
    <div className={styles.todo}>
      <div className={styles.todoText} onDoubleClick={() => removeTodo(index)}>
        <RiTodoFill className={styles.todoIcon} /> {text}
      </div>
    </div>
  )
}

export default Todo;