import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_icon.svg'
import menu from '../assets/menu_icon.png'
const Sidebar = ({user,setUser}) => {
  const navigate=useNavigate();
  return (
    <div className={'h-full p-5 rounded-r-xl overflow-y-scroll text-black '}>
      <div className='pb-5'>
        <div>
          <img src={logo} alt="logo" className='max-w-40'/>
          <div className='relative py-2 group'>
            <img
            src={menu}
            alt='menu'
            className='max-h-5 cursor-pointer bg-gray-700 rounded-full p-1'/>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar;