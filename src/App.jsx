import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/Pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Comman/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path = "/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  )
}

export default App
