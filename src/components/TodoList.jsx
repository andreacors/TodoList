import TodoItem from "./TodoItem";
import styles from './todolist.module.css';

export default function TodoList({todos, setTodos, deleteTodo}) {
  return (
      <div className={styles.list}>
        {todos.map((t, index) => (
          <TodoItem
            key={index}
            todo={t}
            toggleComplete={() => {
              const newTodos = [...todos];
              newTodos[index].completed = !newTodos[index].completed;
              setTodos(newTodos);
            }}
            todos={todos}
            deleteTodo={() => {
              const newTodos = todos.filter((_, i) => i !== index);
              setTodos(newTodos);
            }}
            setTodos={setTodos}
          />
        ))}
      </div>
  )
}