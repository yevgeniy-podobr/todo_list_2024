import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodoList } from "../../redux/todoListReducer";
import { useTypedSelector } from "../../redux/store";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import { ESSKeys } from "../../utils/sessionKeys";

export const Input = () => {
  const dispatch = useDispatch()
  const todoList = useTypedSelector(s => s.todoList.todoList)
  const [newTodo, setNewTodo] = useState<string>('')
  const maxNumberOfCharacters = 20

  const onAddTodo = () => {
    if (newTodo.length > maxNumberOfCharacters) {
      toast.error('Task title is too long!')
    } else {
      const preparedData = [
        ...todoList,
        {
          id: uuidv4(),
          name: newTodo,
          isCompleted: false,
        }
      ]
      dispatch(setTodoList(preparedData))
      sessionStorage.setItem(ESSKeys.todoList, JSON.stringify(preparedData))
      setNewTodo('')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="form-outline flex-fill">
        <input 
          type="text" 
          className="form-control" 
          placeholder="New todo..."
          value={newTodo}  
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAddTodo()}
        />
      </div>
      <button 
        className="btn btn-info ms-2"
        style={{
          "color": "#fff",
          "backgroundColor": "#0d6efd",
          "borderColor": "#0d6efd",
        }}
        onClick={onAddTodo}
        disabled={!newTodo}
      >Add</button>
    </div>
  )
}