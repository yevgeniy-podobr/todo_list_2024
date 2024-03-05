import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodoList } from "../../redux/todoListReducer";
import { useTypedSelector } from "../../redux/store";
import { v4 as uuidv4 } from 'uuid';


export const Input = () => {
  const dispatch = useDispatch()
  const todoList = useTypedSelector(s => s.todoList.todoList)
  const [newTodo, setNewTodo] = useState<string>('')

  const onAddTodo = () => {
    dispatch(setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        name: newTodo,
        isCompleted: false,
      }
    ]))
    setNewTodo('')
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input 
          type="text" 
          className="form-control" 
          placeholder="New todo..."
          value={newTodo}  
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <button 
        className="btn btn-info ms-2"
        onClick={onAddTodo}
      >Add</button>
    </div>
  )
}