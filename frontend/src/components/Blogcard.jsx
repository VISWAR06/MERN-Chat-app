import React from 'react'

const Blogcard = (props) => {
    const{_id,image,description,category}=props
  return (
    <div>
      <img src={image} alt="" />
      {category}
      <div>
        {description}
      </div>
    </div>
  )
}

export default Blogcard
