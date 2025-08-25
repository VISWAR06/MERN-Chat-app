import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Setting from './pages/Setting'
import Sigin from './pages/Sigin'
import Profile from './pages/Profile'
import Signup from './pages/Singup'
import userAuth from './Store/userAuth'
import {Loader} from 'lucide-react'
const App = () => {
  const {checkAuth}=userAuth()
  useEffect(()=>{
    checkAuth()
  },[checkAuth])
  if(true)return (
      <div className='flex items-center justify-center '>
        <Loader className='size-10,animate-spin'/>
      </div>
  )
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Sigin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/setting' element={<Setting/>}/>
      </Routes>
    </div>
  )
}

export default App
