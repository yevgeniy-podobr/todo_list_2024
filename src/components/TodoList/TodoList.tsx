import React, { ReactElement, useCallback, useEffect, useState } from "react"
import { useTypedSelector } from "../../redux/store"
import { ETab, ITodo } from "../../models"
import { Todo } from "./Todo"
import { ESSKeys } from "../../utils/sessionKeys"
import { useDispatch } from "react-redux"
import { setTodoList as setTodoListFromStore } from "../../redux/todoListReducer"

export const TodoList = (): ReactElement => {
  const dispatch = useDispatch()
  const todoListFromStore = useTypedSelector(s => s.todoList.todoList)
  const activeTab = useTypedSelector(s => s.todoList.activeTab)
  const [todoList, setTodoList] = useState<ITodo[]>(todoListFromStore)

  const onChangeDisplayTodoList = useCallback((tab: string) => {
    switch (tab) {
      case ETab.current:
        const activeTodoList = todoListFromStore.filter(todo => !todo.isCompleted)
        setTodoList(activeTodoList)
        break
      case ETab.completed:
        const completedTodoList = todoListFromStore.filter(todo => todo.isCompleted)
        setTodoList(completedTodoList)
        break
      
      default:
        setTodoList(todoListFromStore)
        break
    }
  }, [todoListFromStore])

  useEffect(() => {
    if (sessionStorage.getItem(ESSKeys.todoList)) {
      const preparedData = JSON.parse(sessionStorage.getItem(ESSKeys.todoList) ?? '')
      setTodoList(preparedData)
      dispatch(setTodoListFromStore(preparedData))
    }
  }, [dispatch])

  useEffect(() => {
    onChangeDisplayTodoList(activeTab)
  }, [activeTab, onChangeDisplayTodoList])

  return (
    <div className="tab-content d-flex" style={{ height: '50vh' }}>
      <div className="tab-pane fade show active w-100 overflow-y-auto">
        {todoList.length ?
          <ul className="list-group mb-0">
            {todoList.map(todo =>
              <Todo
                key={todo.id}
                name={todo.name}
                isCompleted={todo.isCompleted}
                id={todo.id}
              />
            )}
          </ul>
          :
          <div className="d-flex justify-content-center align-items-center h-50">
            <p className="fs-3">The list is empty...</p>
          </div>
        }

      </div>
    </div>
  )
}
