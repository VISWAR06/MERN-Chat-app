import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar';
import Rightsidebar from '../Components/Rightsidebar'
import Chatcontainer from '../Components/Chatcontainer'

const Home = () => {
  const[user,setUser]=useState(null);

  return (
    <div className='border w-ful h-screen sm:px-[15%] sm:py-[5%] '>
      <div className= {'border-2 border-gray-700 rounded-2xl overflow-hidden h-[100%] grid gird-cols-1 relative ${user?"md:grid-cols-[1fr_1.5fr_1fr] xl:frid-cols-[1fr_2fr_1fr]":"md:grid-cols-2"}'}>
        <Sidebar
        user={user}
        setUSer={setUser}
        />
        <Chatcontainer
        user={user}
        setUSer={setUser}
        />
        <Rightsidebar
        user={user}
        setUSer={setUser}/>
        
        
      </div>
      
    </div>
  )
}

export default Home
