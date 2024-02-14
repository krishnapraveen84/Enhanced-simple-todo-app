// Write your code here
import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {deleteTodo, todoList, onEditedTask} = props
  const {id, title} = todoList
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  const [isEdit, setIsEdit] = useState(false)
  const [isChecked, setCheck] = useState(false)
  const [taskTitle, setTaskTitle] = useState(title)

  const onClickEdit = () => {
    setIsEdit(true)
  }
  const onSaveEditTask = () => {
    setIsEdit(false)
    onEditedTask(id, taskTitle)
  }
  const onChangeTitle = event => {
    setTaskTitle(event.target.value)
  }
  const onClickCheckInput = event => {
    setCheck(event.target.checked)
  }

  const isCheckedTrue = isChecked ? 'checked-title' : ''
  console.log(isChecked)
  return (
    <li className='card'>
      {isEdit ? (
        <div className='text-btn-div'>
          <input
            className='edit-input'
            type='text'
            value={taskTitle}
            onChange={onChangeTitle}
          />
          <button className='save-edit-btn' onClick={onSaveEditTask}>
            Save
          </button>
        </div>
      ) : (
        <div className='text-btn-div'>
          <div className='input-label-div'>
            <input
              className='check-box'
              checked={isChecked}
              onChange={onClickCheckInput}
              type='checkbox'
              id={id}
            />
            <p htmlFor={id} className={`title ${isCheckedTrue}`}>
              {title}
            </p>
          </div>
          <button className='save-edit-btn' onClick={onClickEdit}>
            Edit
          </button>
        </div>
      )}

      <button onClick={onDeleteTodo} className='delete-btn'>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
