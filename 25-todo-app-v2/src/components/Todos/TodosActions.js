import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css";

function TodosActions({deleteTodos, deleteCompletedTodos, completedTodosExist}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title='Reset todos' onClick={deleteTodos}>
        <RiRefreshLine/>
      </Button>
      <Button title='Delete completed todos' onClick={deleteCompletedTodos} disabled={completedTodosExist}>
        <RiDeleteBin2Line/>
      </Button>
    </div>
  )
}

export default TodosActions