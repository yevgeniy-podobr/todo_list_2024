import React, { ReactElement, useEffect, useMemo } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Input, Tabs, TodoList } from './components'
import { useTypedSelector } from './redux/store'
import { useDispatch } from 'react-redux'
import { ESSKeys } from './utils/sessionKeys'
import { setActiveTab } from './redux/todoListReducer'

export const App = (): ReactElement => {
  const dispatch = useDispatch()
  const todoList = useTypedSelector(s => s.todoList.todoList)

  const completedTasks = useMemo(() => todoList.filter(todo => todo.isCompleted)?.length ?? 0, [todoList])
  const unCompletedTasks = useMemo(() => todoList.filter(todo => !todo.isCompleted)?.length ?? 0, [todoList])

  useEffect(() => {
    if (sessionStorage.getItem(ESSKeys.activeTab)) {
      dispatch(setActiveTab(sessionStorage.getItem(ESSKeys.activeTab)))
    }
  }, [dispatch])

  return (
    <div className="vh-100" style={{ backgroundColor: '#a6cbff' }}>
      <ToastContainer
        limit={3}
        newestOnTop={true}
        autoClose={3000}
        theme="light"
      />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10" >

            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-5">
                <Input />
                <div className="col d-flex justify-content-space-between align-items-center my-4">
                  <Tabs />
                  <div className='col d-flex align-items-center justify-content-end flex-wrap'>
                    <p className='my-0 px-4'>{`Completed: ${completedTasks}`}</p>
                    <p className='my-0'>{`Uncompleted: ${unCompletedTasks}`}</p>
                  </div>
                </div>

                <TodoList />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
