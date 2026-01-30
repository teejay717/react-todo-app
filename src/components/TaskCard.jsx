import React from 'react'
import { useState, useEffect } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import FilterButtons from './FilterButtons'

const TaskCard = () => {

// const [todos, setTodos] = useState(() => {
//   const savedTodos = localStorage.getItem("todosStorage");
//   return savedTodos ? JSON.parse(savedTodos) : [];
// });

const [todos, setTodos] = useState([]);

const [filter, setFilter] = useState("all");

// useEffect(() => {
//   localStorage.setItem("todosStorage", JSON.stringify(todos))
// }, [todos])

useEffect(() => {
  const fetchTodos = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/todos');
    const data = await res.json();

    if (!res.ok) {
      throw new Error('Error fetching todos!');
    }

    console.log("Data from server:", data);
    setTodos(data);
  } catch (error) {
    console.error("Error fetching: ", error);
  }
}
fetchTodos();
}, [])


  return (
    <div className='flex flex-col justify-center bg-gray-800 w-[450px] h-auto py-16 px-8 rounded-xl border-1 border-gray-600'>
        <p className='flex justify-center mb-8 text-white text-3xl'>To Do List</p>
        <TaskInput todos = {todos} setTodos={setTodos}/>
        <FilterButtons filter = {filter} setFilter={setFilter} />
        <TaskList todos={todos} setTodos={setTodos}  filter = {filter} setFilter={setFilter}/>
    </div>
  )
}

export default TaskCard