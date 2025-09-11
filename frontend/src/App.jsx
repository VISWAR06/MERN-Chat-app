import React from 'react'
import Main from './Components/Main'
import {Routes,Route}from'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      
    </div>
  )
}

export default App
