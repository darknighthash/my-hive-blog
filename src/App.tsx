import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightBg dark:bg-darkBg text-dark dark:text-light">
  {/* Logo Section */}
  <div className="flex space-x-4">
    <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
      <img
        src={viteLogo}
        alt="Vite logo"
        className="h-16 w-16 transition-transform duration-300 hover:scale-110"
      />
    </a>
    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
      <img
        src={reactLogo}
        alt="React logo"
        className="h-16 w-16 transition-transform duration-300 hover:scale-110"
      />
    </a>
  </div>

  {/* Title */}
  <h1 className="mt-6 text-4xl font-bold">Vite + React</h1>

  {/* Card Section */}
  <div className="mt-6 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
    <button
      onClick={() => setCount((count) => count + 1)}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    >
      Count is {count}
    </button>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
      Edit <code className="bg-gray-200 dark:bg-gray-700 rounded px-1">src/App.tsx</code> and save to test HMR
    </p>
  </div>

  {/* Footer */}
  <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
    Click on the Vite and React logos to learn more
  </p>
</div>
    </>
  )
}

export default App
