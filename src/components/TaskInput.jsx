import React from 'react'
import { useState } from 'react'
import { API_BASE } from '../config'

const TaskInput = ({ todos, setTodos}) => {
  const [inputValue, setInputValue] = useState('');


  async function submitTask (inputValue) {
    if (!inputValue.trim()) return;

    try {
      // Send the data to the Backend (Port 5000)
      const res = await fetch(`${API_BASE}/api/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputValue })
      })

      if (!res.ok) {
        throw new Error('Failed to add task');
      }

      // The server sends back the new Todo (with the correct ID)
      const newTodoFromServer = await res.json();
      setTodos([...todos, newTodoFromServer]);
      setInputValue('');
    } catch (error) {
      console.log('Error adding task: ', error)
    }



  //   const newTodo = {
  //     id: Date.now(),
  //     text: inputValue,
  //     completed: false
  //   }

  //   setTodos([...todos, newTodo]);
  //   setInputValue('');
  }

  return ( 
    <div className='flex justify-center items-center mb-4'>
        <input 
        value = {inputValue}
        onChange = {(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitTask(inputValue);
          }
        }}
        className='bg-gray-700 rounded-lg text-lg px-4 py-3 m-2 w-[300px] border-1 border-gray-600 text-gray-300 placeholder:text-gray-400' type="text" placeholder='Add new task'/>

        <button onClick={() => {submitTask(inputValue)}} 
        className='bg-blue-600 px-5 py-3 rounded-lg text-lg text-center font-bold text-white cursor-pointer border-1 border-blue-500'>+</button>
    </div>
  )
}

export default TaskInput