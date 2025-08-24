import React from 'react'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Signin/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/' element={<Profile/>}/>
        <Route path='/' element={<Setting/>}/>
      </Routes>
    </div>
  )
}

export default App
