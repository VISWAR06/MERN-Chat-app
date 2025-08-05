import React from 'react'

const Blogcard = (props) => {
    const{_id,description,category}=props
  return (
    <div>
     
      {category}
      <div>
        {description}
      </div>
    </div>
  )
}

export default Blogcard
