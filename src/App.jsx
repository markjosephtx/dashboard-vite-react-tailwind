import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='grid gap-4 p-4 grid-cols-[200px_minmax(200px,_1fr)]'>
        <Sidebar />
        <Dashboard />
      </div>


    </>
  )
}

export default App
