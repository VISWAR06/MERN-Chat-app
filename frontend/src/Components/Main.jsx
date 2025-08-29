import React from 'react'
import Sidebar from './Sidebar'
import Workplace from './Workplace'
import Convo from './Sidebar comp/Convo'

const main = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Workplace/>
      
    </div>
  )
}

export default main
