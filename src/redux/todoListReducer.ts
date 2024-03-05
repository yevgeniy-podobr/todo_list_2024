import { createSlice } from '@reduxjs/toolkit'
import { ETab, ITodo } from '../models'

const defaultTodoList: ITodo[] = []
const defaultActiveTab: string = ETab.all

export const todoListSlice = createSlice({
  name: 'TODO-LIST-REDUCER',
  initialState: {
    todoList: defaultTodoList,
    activeTab: defaultActiveTab,
  },
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    },
  }
})

export const { setTodoList, setActiveTab } = todoListSlice.actions
export const todoListReducer = todoListSlice.reducer