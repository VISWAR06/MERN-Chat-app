import React from 'react'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/setting' element={<Setting/>}/>
      </Routes>
    </div>
  )
}

export default App
