import Image from 'next/image'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ReChart03 from '../Chart_From_Rechart/ReChart03'


export default function VisitSource() {
  return (
    <section className="w-full h-auto bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 sm:pb-4 border-b-[#e2e2ea]">
        <p className="text-sm sm:text-base font-bold">Visits by Source</p>
        <BsThreeDotsVertical className="text-[#7E7E8F] text-lg sm:text-xl cursor-pointer" />
      </div>

      {/* Donut Chart */}
      <div className="mt-4 sm:mt-6 flex justify-center h-[150px] sm:h-[200px]">
        <ReChart03/>
      </div>

      {/* Legend */}
      <div className="flex flex-col text-xs sm:text-sm gap-2 mt-3 sm:mt-4">
        <p className="flex items-center gap-2"><span className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-600 rounded-full"></span> Direct</p>
        <p className="flex items-center gap-2"><span className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full"></span> Social</p>
        <p className="flex items-center gap-2"><span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></span> Email</p>
        <p className="flex items-center gap-2"><span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span> Other</p>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  )
}
