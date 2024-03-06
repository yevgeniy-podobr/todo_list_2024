import { Dispatch, ThunkDispatch, UnknownAction, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { todoListReducer } from './todoListReducer'
import { ITodo } from '../models'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    todoList: todoListReducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): ThunkDispatch<{ 
  todoList: { todoList: ITodo[], activeTab: string }
}, undefined, UnknownAction> & Dispatch<UnknownAction> => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector