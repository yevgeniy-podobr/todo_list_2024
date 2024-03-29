import React, { ReactElement, useState } from "react"
import { useTypedSelector } from "../../redux/store"
import { useDispatch } from "react-redux"
import { setTodoList } from "../../redux/todoListReducer"
import { ESSKeys } from "../../utils/sessionKeys"

interface Props {
  name: string
  isCompleted: boolean
  id: string
}

export const Todo = (props: Props): ReactElement => {
  const {name, isCompleted, id} = props
  const dispatch = useDispatch()
  const todoList = useTypedSelector(s => s.todoList.todoList)
  const [checked, setChecked] = useState<boolean>(isCompleted)

  const handleChange = (): void => {
    setChecked(!checked)
    const preparedData = todoList.map(todo => todo.id === id ? {
      ...todo,
      isCompleted: !checked,
    } : todo)
    dispatch(setTodoList(preparedData))
    sessionStorage.setItem(ESSKeys.todoList, JSON.stringify(preparedData))
  }

  return (
    <li 
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
      style={{ backgroundColor: '#f4f6f7' }}
    >
      <label className="w-100">
        <input 
          className="form-check-input me-2"
          style={{ boxShadow: 'none' }}
          type="checkbox" 
          checked={checked}
          onChange={handleChange} 
        />
        {checked ? <s>{name}</s> : name}
      </label>
    </li>
  )
}