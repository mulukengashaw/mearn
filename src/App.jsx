import './App.css'
import Form from './Forms.jsx'
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(30);

  const btn = () => {
    setCount(count + 3);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">Welcome to Hulumarkit</h1>
      
      {/* Login Form Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Login Form</h2>
        <div className="flex flex-col gap-3">
          <label className="flex flex-col font-medium">
            Name:
            <input className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" id='firstname' type="text" />
          </label>
          <label className="flex flex-col font-medium">
            Email:
            <input className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" type="email" />
          </label>
          <label className="flex flex-col font-medium">
            Password:
            <input className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" type="password" />
          </label>
          <button className="bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition">
            Submit Form
          </button>
        </div>
      </div>

      <hr className="w-full my-8 border-gray-300" />

      {/* Lists Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-center">
        <div className="bg-blue-100 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Programming Languages</h2>
          <ul className="list-disc list-inside font-medium text-gray-700">
            <li>Python</li>
            <li>C++</li>
          </ul>
        </div>

        <div className="bg-purple-100 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-purple-900 mb-3">Web Development</h2>
          <ol className="list-decimal list-inside font-medium text-gray-700">
            <li>React</li>
            <li>MERN</li>
          </ol>
        </div>
      </div>

      <hr className="w-full my-8 border-gray-300" />

      
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold italic">Props Sample Example</h1>
        
        <h6 
          className="bg-yellow-200 flex items-center justify-center rounded-full shadow-inner transition-all duration-500"
          style={{ 
            width: `${count * 2}px`, 
            height: `${count * 2}px`,
            fontSize: `${count / 2}px`,
          }}
        >
          {count}
        </h6>
        
        <Form names={count}/>
        
        <button 
          id="btn" 
          className='bg-blue-600 hover:bg-red-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transform active:scale-95 transition-all duration-300' 
          onClick={btn}
        >
          Click to Increase Font & Count
        </button>
      </div>
    </div>
  )
}

export default App