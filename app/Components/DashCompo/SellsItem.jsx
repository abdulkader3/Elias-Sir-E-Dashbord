import React from 'react'

const SellsItem = ({className , text}) => {
  return (
    <div className='flex items-center justify-center gap-2'>
        <div className={`w-4 h-4 bg-[#FC8D9D] ${className}`}></div>
        <p className='text-[12px] font-normal text-[#9A9AAF]'>{text}</p>
    </div>
  )
}

export default SellsItem