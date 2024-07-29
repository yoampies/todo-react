import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodos, index} = props
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => {handleDeleteTodos(index)}}>
          <i class="fa-regular fa-square-minus" ></i>
        </button>
      </div>
    </li>
  )
}
