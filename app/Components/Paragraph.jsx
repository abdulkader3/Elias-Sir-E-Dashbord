import React from 'react'

const Paragraph = ({className , text}) => {
  return (
    <div className={`${className} text-[#9A9AAF] font-normal text-base`}>{text}</div>
  )
}

export default Paragraph