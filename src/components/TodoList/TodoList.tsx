import React, { useCallback, useEffect, useState } from "react";
import { useTypedSelector } from "../../redux/store";
import { Todo } from "../Todo/Todo";
import { ETab, ITodo } from "../../models";

export const TodoList = () => {
  const todoListFromStore = useTypedSelector(s => s.todoList.todoList)
  const activeTab = useTypedSelector(s => s.todoList.activeTab)
  const [todoList, setTodoList] = useState<ITodo[]>(todoListFromStore)

  const onChangeDisplay = useCallback((tab: string) => {
    switch (tab) {
      case ETab.current:
        const activeTodoList = todoListFromStore.filter(todo => !todo.isCompleted)
        setTodoList(activeTodoList)
        break;
      case ETab.completed:
        const completedTodoList = todoListFromStore.filter(todo => todo.isCompleted)
        setTodoList(completedTodoList)
        break;
      
      default:
        setTodoList(todoListFromStore)
        break;
    }
  }, [todoListFromStore])

  useEffect(() => {
    onChangeDisplay(activeTab)
  }, [activeTab, onChangeDisplay])

  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <ul className="list-group mb-0">
          {todoList.map(todo => (
            <Todo
              key={todo.id}
              name={todo.name}
              isCompleted={todo.isCompleted}
              id={todo.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
