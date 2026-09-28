

export default function TodoItem({todos, todo, setTodos, deleteTodo }) {
  
  const handleClick = (name) => {
    const newArray = todos.map((todo) => 
      todo.text === name ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }
  return (
    <div style={{ padding: '10px', fontSize: '16px' }}>
      <div style={{ display: "flex", textAlign: "center", justifyContent: "space-between", alignItems: "center"}}>
        <span onClick={() => handleClick(todo.text)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}
        </span>
         <button style={{ padding: '12px 20px', border: "none", backgroundColor: "#f7ce18", color: "white", borderRadius: "4px", cursor: "pointer"}} onClick={() => deleteTodo(todo.id)}>x</button>
      </div>
        <hr style={{border: '1px solid #f4f4f4' }} />
    </div>
  );
}