import React from 'react'
import { useState } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

const TaskCard = () => {

const [todos, setTodos] = useState([])

  return (
    <div className='flex flex-col justify-center bg-gray-800 w-auto h-auto py-16 px-8 rounded-xl border-1 border-gray-600'>
        <p className='flex justify-center mb-8 text-white text-3xl'>ToDo</p>
        <TaskInput todos = {todos} setTodos={setTodos}/>
        <TaskList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default TaskCard