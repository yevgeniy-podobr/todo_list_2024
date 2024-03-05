import { createSlice } from '@reduxjs/toolkit'
import { ITodo } from '../models'

const defaultTodoList: ITodo[] = []

export const todoListSlice = createSlice({
  name: 'TODO-LIST-REDUCER',
  initialState: {
    todoList: defaultTodoList,
  },
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload
    },
  }
})

export const { setTodoList } = todoListSlice.actions
export const todoListReducer = todoListSlice.reducer