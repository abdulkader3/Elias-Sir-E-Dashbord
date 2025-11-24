import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import WidgetItem from '@/app/Components/DashCompo/WidgetItem'

export default function ChartSeller() {
  return (
    <div className='w-[364.5px] h-[502px] bg-[#fbfbfc] rounded-2xl py-[18px] px-[24px] m-[26px]'>
        <div className='flex justify-between border-b pb-6 border-b-[#e2e2ea]'>
                <p className='text-base font-bold'>Best Sellers</p>
                <BsThreeDotsVertical className='flex justify-between text-[#7E7E8F] font-normal text-[12px]' />
            </div>


          <div className='py-5'>
                        <WidgetItem/>
          </div>
    </div>
  )
}
