
import React from 'react'

const Convo = ({ name, message, time }) => {
  return (
    <div className="bg-red-200 rounded-xl p-4 mt-2 text-gray-800">
      <div className="font-bold">{name}</div>
      <div>{message}</div>
      <div className="text-sm text-gray-600">{time}</div>
    </div>
  )
}

export default Convo
