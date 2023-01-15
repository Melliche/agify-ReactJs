import { createContext, useEffect, useState } from 'react';
import API from '../api/todosAPI';

export const TodosContext = createContext(null);

export function TodosProvider ({children}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    API.getTodos().then(todos => rebuildTodos(todos));
  },[]);

  const rebuildTodos = (newTodos) => {
    setTodos(newTodos.sort((a, b) => {return a.id - b.id}));
  }

  return (
    <TodosContext.Provider value={{
        todos,
        rebuildTodos
    }}>
        {children}
    </TodosContext.Provider>
  );
}
