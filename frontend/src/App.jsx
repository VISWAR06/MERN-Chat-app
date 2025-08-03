import React from 'react'
import Home from './pages/Home'
import Blog from './pages/Blog'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/blog' element={<Blog/>}  />
      </Routes>
      
    </div>
  )
}

export default App
 