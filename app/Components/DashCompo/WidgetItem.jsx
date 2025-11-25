import Image from 'next/image'
import React from 'react'

const WidgetItem = ({ title, text, price, sales, img }) => {
  return (
    <div className="flex items-center justify-between w-full py-3">
      
      <div className="flex items-center gap-3">
        <Image 
          src={img} 
          width={40} 
          height={40} 
          className="rounded-full"
          alt={title}
        />

        <div className="flex flex-col">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-[12px] text-[#9A9AAF]">{text}</p>
        </div>
      </div>

      <div className="flex flex-col text-right">
        <p className="text-sm font-semibold">${price}</p>
        <p className="text-[12px] text-[#9A9AAF]">{sales} sales</p>
      </div>
    </div>
  )
}

export default WidgetItem
