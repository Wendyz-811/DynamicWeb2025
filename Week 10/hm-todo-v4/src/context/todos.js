import {createContext, useState} from 'react'

// Create Context
const TodosContext = createContext()

// Create Provider 
function Provider({children}) {
  // move App.js state to here
  const [todos, setTodos] = useState([])
  const createTodo = (title) => {
    // make a new copy of existing todos and add a new one to the end
    const updatedTodos = [
      ...todos,
      {title, id: Math.round(Math.random() * 9999)},
    ]
    setTodos(updatedTodos)
  }

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, title: newTitle}
      }
      return todo
    })
    // call our setter to update state with our new array
    setTodos(updatedTodos)
  }

  // share value
  const valuesToShare = {
    todos,
    createTodo,
    deleteTodoById,
    editTodoById,
  }

  return (
    <TodosContext.Provider value={valuesToShare}>
      {children}
    </TodosContext.Provider>
  )
}

export {Provider}
export default TodosContext