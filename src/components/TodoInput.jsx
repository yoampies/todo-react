import React, { useState } from 'react'

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props

  return (
    
    <header>
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleAddTodos(todoValue)
          setTodoValue("")
        }
      }}placeholder="Enter the to-do"/>
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue("")
      }}>Add</button>
    </header>
  )
}
