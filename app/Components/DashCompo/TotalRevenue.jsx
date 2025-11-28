import Image from 'next/image'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ReChart01 from '../Chart_From_Rechart/ReChart01'


export default function TotalRevenue() {
  return (
    <section className="w-full h-auto bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 sm:pb-4 border-b-[#e2e2ea]">
        <p className="text-sm sm:text-base font-bold">Total Revenue</p>
        <BsThreeDotsVertical className="text-[#7E7E8F] text-lg sm:text-xl cursor-pointer" />
      </div>

      {/* Chart */}
      <div className="w-full h-[150px] sm:h-[200px] lg:h-[250px] mt-4 sm:mt-6 flex justify-center overflow-x-auto">
        <ReChart01/>
      </div>

      {/* Legend */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mt-3 sm:mt-4">
        <p className="flex items-center gap-2 text-xs sm:text-sm"><span className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-600 rounded-full"></span> Direct</p>
        <p className="flex items-center gap-2 text-xs sm:text-sm"><span className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full"></span> Social</p>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  )
}
