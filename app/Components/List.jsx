import React from 'react'

const List = ({text , className}) => {
  return (
    <li className={`${className} list-none cursor-pointer mb-2 text-[#7E7E8F] hover:text-[#E23738] duration-500`}>{text}</li>
  )
}

export default List