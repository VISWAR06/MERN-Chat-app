import React, { useState } from 'react'
import Search from './Sidebar comp/Search'
import Convo from './Sidebar comp/Convo'
import Header from './Sidebar comp/Header'

const Sidebar = () => {
  const [convo, setConvo] = useState([
    { name: "user1", message: "msg1", time: "today" },
    { name: "user2", message: "msg2", time: "yesterday" },
    { name: "user3", message: "msg3", time: "today" },
    { name: "user4", message: "msg4", time: "yesterday" },
    { name: "user5", message: "msg5", time: "today" },
    { name: "user5", message: "msg5", time: "today" },
 
  ])

  return (
    <div className="h-screen w-[30%] border-2 border-black flex flex-col">
      <Header />
      <Search />
      
      
      <div className=" flex flex-col bg-white rounded-xl overflow-y-auto mt-2">
        {convo.map((c, i) => (
          <Convo 
            key={i} 
            name={c.name} 
            message={c.message} 
            time={c.time} 
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
