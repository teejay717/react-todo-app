import React from 'react'

const FilterButtons = ({filter, setFilter}) => {
  return (
    <div className='flex m-2 gap-2'>
        <button onClick={() => setFilter("all")}  className={` px-4 py-1 rounded-lg text-s text-center font-bold text-white cursor-pointer border-1 ${filter === "all" ? 'border-blue-500 bg-blue-600' : 'border-gray-600 bg-gray-700'}`}>All</button>
        <button onClick={() => setFilter("active")} className={` px-4 py-1 rounded-lg text-s text-center font-bold text-white cursor-pointer border-1 ${filter === "active" ? 'border-blue-500 bg-blue-600' : 'border-gray-600 bg-gray-700'}`}>Active</button>
        <button onClick={() => setFilter("completed")} className={` px-4 py-1 rounded-lg text-s text-center font-bold text-white cursor-pointer border-1 ${filter === "completed" ? 'border-blue-500 bg-blue-600' : 'border-gray-600 bg-gray-700'}`}>Completed</button>
    </div>
  )
}

export default FilterButtons