import React from 'react'
import { useState } from 'react'

const TaskInput = ({ todos, setTodos}) => {
  const [inputValue, setInputValue] = useState('');


  function submitTask (inputValue) {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  return ( 
    <div className='flex justify-center items-center mb-4'>
        <input 
        value = {inputValue}
        onChange = {(e) => setInputValue(e.target.value)}
        className='bg-gray-700 rounded-lg text-lg px-4 py-3 m-2 w-[300px] border-1 border-gray-600 text-gray-300 placeholder:text-gray-400' type="text" placeholder='Add new task'/>

        <button onClick={() => {submitTask(inputValue)}} 
        className='bg-blue-600 px-5 py-3 rounded-lg text-lg text-center font-bold text-white cursor-pointer border-1 border-blue-500'>+</button>
    </div>
  )
}

export default TaskInput