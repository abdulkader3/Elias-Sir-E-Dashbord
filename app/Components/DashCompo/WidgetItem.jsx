import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/photos/Avatar1 (2).png'

const WidgetItem = () => {
  return (
    <div className='flex gap-2'>
        <Image src={img1} width={40} height={40}/>

        <div className='flex justify-between pb-4 text-sm'>
            <p>Esther Howard</p>
            <p className='font-semibold'>$446.61</p>
        </div>

          <div className='flex justify-between pb-6 text-[12px] font-normal text-[#9A9AAF]'>
            <p>MasterCard</p>
            <p className='font-semibold'>985 sales</p>
        </div>
        
    </div>
  )
}

export default WidgetItem