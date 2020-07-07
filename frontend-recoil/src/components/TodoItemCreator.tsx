import React from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from 'store/todo'

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState('')
  const onChange = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value)
  }

  const setTodoList = useSetRecoilState(todoListState)
  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      }
    ])
  }


  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
export default TodoItemCreator

let id = 0
const getId = () => {
  return id++
}