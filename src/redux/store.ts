import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { todoListReducer } from './todoListReducer'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    todoList: todoListReducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector