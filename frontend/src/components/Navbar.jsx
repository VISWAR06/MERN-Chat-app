import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='flex justify-between items-center mx-8 p-10'>
      
        <h1 onClick={()=>navigate('/')} className='text-3xl cursor-pointer'>BLOOOG</h1>
      <button onClick= {()=>navigate('/admin')}className='cursor-pointer font-bold border-2 border-yellow-500 rounded-xl p-2 bg-blue-200'>Login</button>
    </div>
  )
}

export default Navbar
