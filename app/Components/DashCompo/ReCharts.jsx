import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import SellsItem from '@/app/Components/DashCompo/SellsItem'
import { BiParagraph } from 'react-icons/bi'
import Paragraph from '@/app/Components/Paragraph'
import Image from 'next/image'
import ReChart01 from '../Chart_From_Rechart/ReChart01'

const ReCharts = () => {
    return (
        <div className='w-full lg:w-[752px] h-auto lg:h-[502px] bg-[#ffffff] rounded-2xl py-4 lg:py-[18px] px-4 lg:px-[24px] m-2 sm:m-4 lg:m-[26px] shadow-sm'>
            <div className='flex flex-col sm:flex-row sm:justify-between border-b pb-4 lg:pb-6 border-b-[#e2e2ea] gap-2'>
                <p className='text-base font-bold'>Sales Performance</p>
                <p className='text-[12px] font-normal text-[#9A9AAF]'>Today’s</p>
                <p className='text-[12px] font-normal text-[#9A9AAF]'>Monthly</p>
                <BsThreeDotsVertical className='flex justify-between text-[#7E7E8F] font-normal text-lg cursor-pointer' />
            </div>

            <div className='flex gap-6 py-[18px] mb-[100px]'>
                <SellsItem className='!bg-[#FC8D9D]' text='Completed'/>
                 <SellsItem className='!bg-[#F3BCFD]' text='Pending'/>
                <SellsItem className='!bg-[#80B7FB]' text='Unpaid'/>
                <SellsItem className='!bg-[#B9A2FB]' text='Delivered'/>

            </div>

            <div className="w-[692px] h-[210px] ">
                <ReChart01/>
            </div>

            <div className="flex gap-9 mt-5">
                <Paragraph text='Jan'/>
                <Paragraph text='Feb'/>
                <Paragraph text='Mar'/>
                <Paragraph text='Apr'/>
                <Paragraph text='May'/>
                <Paragraph text='Jun'/>
                <Paragraph text='Jul'/>
                <Paragraph text='Aug'/>
                <Paragraph text='Sep'/>
                <Paragraph text='Oct'/>
                <Paragraph text='Nov'/>
                <Paragraph text='Dec'/>
            </div>

        </div>
    )
}

export default ReCharts