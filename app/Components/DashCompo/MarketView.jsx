import Image from 'next/image'
import React from 'react'
import Paragraph from '@/app/Components/Paragraph'
import chart from '../../../public/photos/Group 1.png'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function MarketView() {
  return (
    <section className="w-[363px] bg-white rounded-2xl p-6 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 border-b-[#e2e2ea]">
        <p className="text-base font-bold">Market Overview</p>
        <BsThreeDotsVertical className="text-[#7E7E8F] text-xl cursor-pointer" />
      </div>

      {/* Chart Image */}
      <div className="mt-6 flex justify-center">
        <Image 
          src={chart} 
          alt="Bar Chart" 
          className="w-full h-auto"
        />
      </div>

      {/* Bottom Labels */}
      <div className="flex justify-between mt-3">
        <Paragraph text="Mon" />
        <Paragraph text="Tue" />
        <Paragraph text="Wed" />
        <Paragraph text="Thu" />
        <Paragraph text="Fri" />
        <Paragraph text="Sat" className="text-red-500" />
        <Paragraph text="Sun" className="text-red-500" />
      </div>
    </section>
  )
}
