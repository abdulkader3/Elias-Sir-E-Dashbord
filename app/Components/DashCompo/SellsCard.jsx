import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { MdOutlineDelete } from 'react-icons/md'

const SellsCard = () => {
  return (
    <div className='w-[265px] h-[128px] py-4 px-[19px] bg-white rounded-2xl'>
        <div className='flex justify-between text-[#7E7E8F] font-normal text-[12px]'>
            <p>Total sells</p>
            <BsThreeDotsVertical />
        </div> 


        <div className='flex justify-between items-center pt-6 pb-2'>
            <div className='flex justify-between items-center gap-2'>
                <div className='w-[32px] h-[32px] bg-[#50D1B2] rounded-lg flex items-center justify-center'>
                    <MdOutlineDelete className=' text-white text-lg font-bold' />
                </div> 
              <p className='text-base font-bold'>$126.500</p>
            </div>

            <div className='flex justify-between gap-2 text-[#50D1B2] text-[16px]'>
                    <FaArrowUpRightFromSquare/>
            <p className=' font-medium'>34.7%</p>
            </div>
        
        </div>

        <div className='flex justify-end '>
            <p className='text-[11px] font-normal text-[#9A9AAF]'>Compared to Jan 2022</p>
        </div>
        
    </div>
  )
}

export default SellsCard