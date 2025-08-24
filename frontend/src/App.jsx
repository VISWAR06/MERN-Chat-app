import React from 'react'
import Navbar from './components/Navbar'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Setting from './pages/Setting'
import Sigin from './pages/Sigin'
import Profile from './pages/Profile'
import Signup from './pages/Singup'
const App = () => {
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
