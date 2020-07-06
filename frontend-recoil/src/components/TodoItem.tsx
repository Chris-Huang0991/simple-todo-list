import React from 'react'
import { TodoItemType, todoListState } from 'store/todo'
import { useRecoilState } from 'recoil'

type TodoItemProps = {
  item: TodoItemType
}
const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex(listItem => listItem === item)
  
  const editItem = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })
    setTodoList(newList)
  }
  const toggleCompleteItem = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList)
  }
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItem} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleCompleteItem}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}
export default TodoItem

function replaceItemAtIndex(arr: any[], index: number, newValue: any) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: any[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
