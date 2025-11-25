import Image from 'next/image'
import React from 'react'
import donut from '../../../public/photos/Group 1.png'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function VisitSource() {
  return (
    <section className="w-[363px] bg-white rounded-2xl p-6 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 border-b-[#e2e2ea]">
        <p className="text-base font-bold">Visits by Source</p>
        <BsThreeDotsVertical className="text-[#7E7E8F] text-xl cursor-pointer" />
      </div>

      {/* Donut Chart */}
      <div className="mt-6 flex justify-center">
        <Image 
          src={donut}
          alt="Donut Chart"
          className="w-[180px] h-auto"
        />
      </div>

      {/* Legend */}
      <div className="flex flex-col text-sm gap-2 mt-4">
        <p className="flex items-center gap-2"><span className="w-3 h-3 bg-purple-600 rounded-full"></span> Direct</p>
        <p className="flex items-center gap-2"><span className="w-3 h-3 bg-pink-500 rounded-full"></span> Social</p>
        <p className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Email</p>
        <p className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span> Other</p>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  )
}
