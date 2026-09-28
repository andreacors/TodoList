import { useState } from "react";

export default function Form({todos, setTodos}) {
  const [todo, setTodo] = useState({ text: "", completed: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodos([...todos, { ...todo }]);
    setTodo({ text: '', completed: false });
  }

  return (
      <form onSubmit={handleSubmit}
        style={{ display: 'flex', gap: '10px', justifyContent: 'center', backgroundColor: 'white', borderRadius: '8px', padding: '20px', width: "500px", margin: "10px", marginTop: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", boxSizing: "border-box" }}>
        <input 
          style={{ width: "100%", border: "none", display: "block", outline: "none" }} 
          onChange={(e) => setTodo({ ...todo, text: e.target.value })} 
          value={todo.text} 
          type="text" 
          placeholder="Add a new task"/>
        <button 
          type="submit"
          style={{ border: "none", backgroundColor: "#f7ce18", color: "black", padding: "10px 20px", borderRadius: "4px", cursor: "pointer", color: "white" }} 
        >Add</button>
      </form>
  )
}