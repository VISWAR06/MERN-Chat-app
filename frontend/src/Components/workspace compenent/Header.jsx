import IconButton from '@mui/material/IconButton'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  return (
    <div className='w-full flex justify-evenly h-18 rounded-2xl bg-white'>
      
       <IconButton>
        <AccountCircleIcon/>
        user
       </IconButton>
       
       <IconButton>
        <DeleteIcon/>
       </IconButton>
    </div>
  )
}

export default Header
