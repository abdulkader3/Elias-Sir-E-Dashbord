import Image from 'next/image'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ReChart01 from '../Chart_From_Rechart/ReChart01'


export default function TotalRevenue() {
  return (
    <section className="w-full bg-white rounded-2xl p-6 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 border-b-[#e2e2ea]">
        <p className="text-base font-bold">Total Revenue</p>
        <BsThreeDotsVertical className="text-[#7E7E8F] text-xl cursor-pointer" />
      </div>

      {/* Chart */}
      <div className="w-full h-[250px] mt-6 flex justify-center">
        <ReChart01/>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4">
        <p className="flex items-center gap-2"><span className="w-3 h-3 bg-purple-600 rounded-full"></span> Direct</p>
        <p className="flex items-center gap-2"><span className="w-3 h-3 bg-pink-400 rounded-full"></span> Social</p>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  )
}
