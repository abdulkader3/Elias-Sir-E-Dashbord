import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { MdOutlineDelete } from 'react-icons/md'

const SellsCard = () => {
  return (
    <div className='w-full h-auto min-h-[128px] lg:w-[265px] lg:h-[128px] py-4 px-4 lg:px-[19px] bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
        <div className='flex justify-between text-[#7E7E8F] font-normal text-[11px] sm:text-[12px]'>
            <p>Total sells</p>
            <BsThreeDotsVertical />
        </div> 


        <div className='flex justify-between items-center pt-4 lg:pt-6 pb-2 gap-2'>
            <div className='flex justify-between items-center gap-2'>
                <div className='w-8 h-8 lg:w-[32px] lg:h-[32px] bg-[#50D1B2] rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MdOutlineDelete className=' text-white text-base lg:text-lg font-bold' />
                </div> 
              <p className='text-sm sm:text-base lg:text-base font-bold break-words'>$126.500</p>
            </div>

            <div className='flex justify-between gap-2 text-[#50D1B2] text-sm lg:text-[16px] flex-shrink-0'>
                    <FaArrowUpRightFromSquare/>
            <p className=' font-medium'>34.7%</p>
            </div>
        
        </div>

        <div className='flex justify-end '>
            <p className='text-[10px] sm:text-[11px] font-normal text-[#9A9AAF]'>Compared to Jan 2022</p>
        </div>
        
    </div>
  )
}

export default SellsCard