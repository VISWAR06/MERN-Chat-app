import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({user,setUser}) => {
  const navigate=useNavigate();
  return (
    <div className={'h-full p-5 rounded-r-xl overflow-y-scroll text-black '}>
      <div>
        
      </div>
    </div>
  )
}

export default Sidebar;