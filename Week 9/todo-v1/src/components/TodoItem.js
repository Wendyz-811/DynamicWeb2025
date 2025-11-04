import {useState} from 'react'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
  const [showEdit, setShowEdit] = useState(false)
  const {todo, onDelete, onEdit} = props

  const handleDelete = () => {
    onDelete(todo.id)
  }

  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle)
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