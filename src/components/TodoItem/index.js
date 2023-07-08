// Write your code here
import './index.css'

const TodoItem = props => {
  const {id, title} = props

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-item">
      <p>{title}</p>
      <button className="button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
