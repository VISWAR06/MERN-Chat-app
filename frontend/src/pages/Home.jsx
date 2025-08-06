import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatarea from '../components/Chatarea'
import Rightsidebar from '../components/Rightsidebar'

const Home = () => {
  return (
    <div>
      home
      <div>
        <Sidebar/>
        <Chatarea/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Home
