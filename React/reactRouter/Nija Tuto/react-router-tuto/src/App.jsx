import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>Home</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
