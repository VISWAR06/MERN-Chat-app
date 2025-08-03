import React from 'react'

const Bloglist = () => {
  return (
    <div>
        <div className='flex justify-center'>
            <ul >
                <button className='flex gap-32 p-5 m-5  '>
                <li className='bg-blue-400 w-24 rounded-xl'>All</li>
                <li className='bg-blue-400 w-24 rounded-xl'>Tech</li>
                <li className='bg-blue-400 w-24 rounded-xl'>Artfi</li>
                <li className='bg-blue-400 w-24 rounded-xl'>Natio</li>
                </button>
              
            </ul>
        </div>
      
    </div>
  )
}

export default Bloglist
