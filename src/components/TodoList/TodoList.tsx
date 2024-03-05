import React from "react";
import { useTypedSelector } from "../../redux/store";
import { Todo } from "../Todo/Todo";

export const TodoList = () => {
  const todoList = useTypedSelector(s => s.todoList.todoList)

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
