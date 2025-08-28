import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
const Search = () => {
    const[text,setText]=useState("")
  return (
    <div className=" h-20 rounded-2xl mt-4">
      <div className='flex items-center h-full'>
        <IconButton><SearchIcon sx={{fontSize:50}}/></IconButton>
        <input className='h-16 w-[80%]' placeholder='SEARCH' type='text' value={text}/>
      </div>

    </div>
  )
}

export default Search
