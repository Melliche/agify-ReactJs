import { useContext, useState } from 'react';
import { TodosContext } from '../context/todosContext';
import API from '../api/todosAPI';

const ItemTodo = ({todo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const todosContext = useContext(TodosContext);
  const [description, setDescription] = useState(todo.description);
  let itemContent;

  if(isEditing) {
    itemContent = (
      <>
        <input 
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button 
          type="button" 
          className="btn-save"
          onClick={() => {
            API.updateTodo(todo.id, {
              ...todo,
              description: description,
              done: false
            }).then(res => {
              if (res) {
                API.getTodos().then(todos => todosContext.rebuildTodos(todos));
              }
            });
            setIsEditing(false)
          }}><i className="fa-solid fa-save"></i></button>
      </>
    )
  } else {
    itemContent = (
      <>
        <input 
          type="text" 
          value={description}
          className={todo.done ? 'done':''}
          readOnly={true}
          onChange={(e) => {}}
        />
        <button 
          type="button" 
          onClick={() => setIsEditing(true)}><i className="fa-solid fa-pen"></i></button>
      </>
    )
  }

  return (
    <>
      {itemContent}
      <button 
        type="button" 
        className={todo.done && !isEditing ? 'btn-check':''}
        disabled={isEditing}
        onClick={() => {
          API.updateTodo(todo.id, {
            ...todo,
            done: !todo.done
          }).then(res => {
            if (res) {
              API.getTodos().then(todos => todosContext.rebuildTodos(todos));
            }
          });
        }}><i className="fa-solid fa-check"></i></button>
      <button 
          type="button" 
          className="btn-remove"
          onClick={() => {
            API.deleteTodo(todo.id).then(res => {
              if (res) {
                API.getTodos().then(todos => todosContext.rebuildTodos(todos));
              }
            });
          }}><i className="fa-solid fa-trash"></i></button>
    </>
  )
}

export default ItemTodo
