import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TaskList= ({ todos, setTodos, filter, setFilter }) => {

  function deleteTask(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(todos.map(todo => 
      todo.id === id 
      ? {...todo, completed: !todo.completed } : todo ))
  }

  const tasksRemaining = todos.filter(todo => todo.completed === false).length

  console.log(filter);

  return (
    <>
    <ul className='text-2xl m-2'>
      {todos.map(todo => (
        <div key={todo.id} className='flex flex-row justify-center items-center'>
          <li className={`flex border-1 border-gray-600 bg-gray-700 m-2 text-lg text-white w-[300px] h-auto py-2 px-4 rounded-lg break-words overflow-hidden ${todo.completed ? 'opacity-50' : ''}`}>
            <span className='break-all'>
              <input
              type="checkbox"
              checked = {todo.completed} 
              onChange={() => toggleComplete(todo.id)}
              className='mr-4 cursor-pointer' 
              />
              {todo.text}
            </span>
          </li>
          <button 
          onClick = {() => 
            deleteTask(todo.id)
          }
          className='bg-blue-600 px-4 py-2 w-auto h-auto rounded-lg text-center font-bold text-white text-lg cursor-pointer border-1 border-blue-500'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      ))}
    </ul>
    <div className='mt-4 flex justify-items-start border-t-2 pt-2 border-gray-600'>
      <span className='text-gray-500 text-s'>Tasks remaining: {tasksRemaining}</span>
    </div>
    </>
  )

}

export default TaskList