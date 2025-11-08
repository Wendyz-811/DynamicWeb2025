import {useState} from 'react'
import TodoEdit from './TodoEdit'
import useTodosContext from '../hooks/use-todos-context'

const TodoItem = (props) => {
  const [showEdit, setShowEdit] = useState(false)
  
  const {todo} = props
  const {deleteTodoById, editTodoById} = useTodosContext()
  
  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    editTodoById(id, newTitle)
    setShowEdit(false)
  }
  
  let content = (
    <div>
      {todo.title}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleShowEdit}>Edit</button>
    </div>
  )
  
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }
  
  return <div>{content}</div>
}

export default TodoItem