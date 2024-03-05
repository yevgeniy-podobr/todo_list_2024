import React from "react";
import { useTypedSelector } from "../../redux/store";
import { ETab } from "../../models";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../redux/todoListReducer";

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

export const Tabs = () => {
  const dispatch = useDispatch()
  const activeTab = useTypedSelector(s => s.todoList.activeTab)

  const onChangeActiveTab = (name: string) => {
    dispatch(setActiveTab(name))
  }

  return (
    <ul className="nav nav-pills">
      {tabs.map(tab => (
        <li 
          className='nav-item' 
          key={tab.id}
          onClick={() => onChangeActiveTab(tab.name)}
        >
          <button className={`nav-link ${activeTab === tab.name && 'active'}`}>{tab.name}</button>
        </li>
      ))}
    </ul>
  )
}