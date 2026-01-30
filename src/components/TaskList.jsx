import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TaskList= ({ todos, setTodos, filter, setFilter }) => {

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  async function deleteTask(id) {
    try {
      const res = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: 'DELETE'
      });
      
      if (res.ok) {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        console.log('Deleted!');        
      }

    } catch (error) {
      console.error("Error deleting task: ", error)
    }

    // setTodos(todos.filter(todo => todo.id !== id));
  }

  async function toggleComplete(id) {
    try {
      const res = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: 'PUT'
      });

      if (res.ok) {
        const updatedTodo = await res.json();

        // Update the UI

        setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo))
      }
    } catch (error) {
      console.error('Error updating task: ', error)
    }
    // setTodos(todos.map(todo => 
    //   todo.id === id 
    //   ? {...todo, completed: !todo.completed } : todo ))
  }

  function clearCompleted() {
    setTodos(todos.filter(todo => !todo.completed))
  }

  function startEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function saveEdit(id, editText) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, text: editText} : todo));
    setEditingId(null);
    
  }

  function autoResize(e) {
  e.target.style.height = 'auto';
  e.target.style.height = e.target.scrollHeight + 'px';
}

  const tasksRemaining = todos.filter(todo => todo.completed === false).length

  return (
    <>
    {
      todos.length === 0 ? <p className='flex justify-center items-center mt-10 mb-6 mr-8 ml-8 text-xl p-4 border-gray-600 bg-gray-700 border rounded-lg text-gray-400'>No Tasks!</p> : 
      <ul className='text-2xl m-2'>
      {todos.filter(todo => 
      filter === "all" ? true : 
      filter === "active" ? 
      !todo.completed : todo.completed).map(todo => 
        (
        <div key={todo.id} className='flex flex-row justify-center items-center'>
          <li className={`flex border-1 m-2 text-lg text-white w-[300px] h-auto py-2 px-4 rounded-lg break-words overflow-hidden ${todo.completed ? 'opacity-50' : ''} ${editingId === todo.id ? 'border-gray-300 bg-gray-600' : 'border-gray-600 bg-gray-700'}`}>
            <input
              type="checkbox"
              checked = {todo.completed} 
              onChange={() => toggleComplete(todo.id)}
              className='mr-4 cursor-pointer' 
              />
            <div className='flex justify-between items-center'>
              <textarea 
              autoFocus
                className='break-all w-48 bg-transparent resize-none overflow-hidden'
                disabled={editingId !== todo.id}
                onChange={(e) => {
                  setEditText(e.target.value);
                  autoResize(e);
                }}
                onInput={autoResize}
                value={editingId === todo.id ? editText : todo.text}
                rows={1}
                ref={(el) => { if (el) { el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px'; }}}
              />
              <button 
              onClick={() => editingId === todo.id ? saveEdit(todo.id, editText) : startEdit(todo)}
              className='opacity-50 ml-4 hover:cursor-pointer'>{editingId === todo.id ? 'Save' : 'Edit'}</button>
            </div>
          </li>
          <button 
          onClick = {() => 
            deleteTask(todo.id)
          }
          className='bg-blue-600 px-4 py-2 w-auto h-auto rounded-lg text-center font-bold text-white text-lg cursor-pointer border-1 border-blue-500'><FontAwesomeIcon icon={faTrash} /></button>
        </div>  
      ))}
    </ul>
    }
    
    <div className='mt-4 flex justify-items-start border-t-2 pt-2 border-gray-600 justify-between'>
      <span className='text-gray-500 text-s'>Tasks remaining: {tasksRemaining}</span>
      <button onClick={() => clearCompleted()} className='text-gray-500 text-s hover:cursor-pointer hover:underline '>Clear Completed</button>
    </div>
    </>
  )

}

export default TaskList