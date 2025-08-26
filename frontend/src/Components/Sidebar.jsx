import React from 'react'
import Search from './Sidebar comp/Search'
import Convo from './Sidebar comp/Convo'
import Header from './Sidebar comp/Header'
const Sidebar = () => {
  return (
    <div className=' h-screen w-[30%] border-2 border-black'>
      <Header/>
      <Search/>
      <Convo/>
    </div>
  )
}

export default Sidebar
