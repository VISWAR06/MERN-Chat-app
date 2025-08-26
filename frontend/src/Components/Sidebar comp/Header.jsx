import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
  return (
    <div className=''>
      <div className='w-full bg-white h-20 rounded-2xl flex items-center justify-between px-4'>
        <IconButton><AccountCircleIcon sx={{fontSize:50,marginTop:1}}/></IconButton>
        <div className=' gap-3 '>
        <IconButton><GroupAddIcon sx={{fontSize:50}}/></IconButton>
        <IconButton><PersonAddIcon sx={{fontSize:50}}/></IconButton>
        <IconButton><DarkModeIcon sx={{fontSize:50}}/></IconButton>
        </div>
      </div>
    </div>
  )
}

export default Header
