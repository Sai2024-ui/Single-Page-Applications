'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]) // <-- removed <string[]>

  const handleAdd = () => {
    if (task === '') return
    setTasks([...tasks, task])
    setTask('')
  }

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <button className='p-2 bg-sky-200 font-bold rounded-lg mt-5 mb-5'><Link href='/'>Home</Link></button>
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Simple Todo List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-2 px-4">
        {/* {tasks.map((t, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-white px-4 py-2 rounded shadow"
          >
            <span>{t}</span>
            <button
              onClick={() => handleDelete(idx)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))} */}
        {tasks.map((item, index) =>(
          <li key = {index} className='flex justify-between items-center bg-white px-4 py-2 rounded shadow'>
              <p>{item}</p>
              <button onClick={() =>handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
