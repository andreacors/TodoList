import { useState } from 'react'
import TodoItem from './TodoItem';
import Form from './Form';
import TodoList from './TodoList';
import TodoCheckList from './TodoCheckList';


export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', padding: "10px", justifyContent: 'center', alignItems: 'center'  }}>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} toggleComplete={() => {}} deleteTodo={() => {}} />
      <TodoCheckList todos={todos} setTodos={setTodos} />
    </div>
  )
}