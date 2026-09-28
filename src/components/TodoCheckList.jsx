import style from './todoCheckList.module.css';

export default function TodoCheckList({todos}) {
  return (
    <div className={style.list}>
      <h4>todo totali: {todos.length}</h4>
      <h4>completate: {todos.filter(todo => todo.completed).length}</h4>
      <h4>non completate: {todos.filter(todo => !todo.completed).length}</h4>  
    </div>
  );
}