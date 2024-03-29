import React, { ReactElement } from "react"
import { useTypedSelector } from "../../redux/store"
import { ETab } from "../../models"
import { useDispatch } from "react-redux"
import { setActiveTab } from "../../redux/todoListReducer"
import { ESSKeys } from "../../utils/sessionKeys"

const tabs = [
  {
    id: 1,
    name: ETab.all
  },
  {
    id: 2,
    name: ETab.current
  },
  {
    id: 3,
    name: ETab.completed
  },
]

export const Tabs = (): ReactElement => {
  const dispatch = useDispatch()
  const activeTab = useTypedSelector(s => s.todoList.activeTab)

  const onChangeActiveTab = (name: string): void => {
    dispatch(setActiveTab(name))
    sessionStorage.setItem(ESSKeys.activeTab, name)
  }

  return (
    <ul className="nav nav-pills">
      {tabs.map(tab => 
        <li 
          className='nav-item' 
          key={tab.id}
          onClick={(): void => onChangeActiveTab(tab.name)}
        >
          <button className={`nav-link ${activeTab === tab.name ? 'active' : ''}`}>{tab.name}</button>
        </li>
      )}
    </ul>
  )
}