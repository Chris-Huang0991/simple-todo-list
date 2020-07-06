import React from 'react'

import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from 'store/filteredTodo'

import TodoItemCreator from 'components/TodoItemCreator'
import TodoItem from 'components/TodoItem'
import TodoListFilters from 'components/TodoListFilters'
import TodoListStats from 'components/TodoListStats'

const App = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="App">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default App
