import React from 'react'
import { useState } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import FilterButtons from './FilterButtons'

const TaskCard = () => {

const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState("all");

  return (
    <div className='flex flex-col justify-center bg-gray-800 w-auto h-auto py-16 px-8 rounded-xl border-1 border-gray-600'>
        <p className='flex justify-center mb-8 text-white text-3xl'>To Do List</p>
        <TaskInput todos = {todos} setTodos={setTodos}/>
        <FilterButtons filter = {filter} setFilter={setFilter} />
        <TaskList todos={todos} setTodos={setTodos}  filter = {filter} setFilter={setFilter}/>
    </div>
  )
}

export default TaskCard