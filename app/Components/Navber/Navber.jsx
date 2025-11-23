import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/photos/Logo.png"
import ProfileImage from "../../../public/photos/Avatar.png"
import { TbExternalLink } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import { BiSolidMessageDots } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'

const Navber = () => {
    return (
        <>

         <div className="w-full h-[96px] flex items-center justify-center ">
        
              <div className="flex items-center gap-40 ">
        
                <div className="Logo w-[148px] h-[39.29px] ">
                  <Image src={Logo} alt='Logo' className='w-full h-full'/>
                </div>
        
        
                <div className="w-[360px] h-[48px] ">
                  <input className='w-full h-full shadow-2xs bg-[#F5F5FA] pl-10 rounded-2xl ' placeholder='Search' type="search" />
                </div>
        
                <div className=" flex items-center gap-5">
                  <TbExternalLink/>
                  <p>Browse</p>
                  <IoIosArrowDown />
                </div>
        
        
                <div className="message-notification flex items-center gap-10 text-2xl ">
        
                  <div className="message">
                    <BiSolidMessageDots />
                  </div>
        
                  <div className="message">
                    <IoNotifications />
                  </div>
        
        
                </div>
        
                <div className="w-12 h-12 ">
                  <Image src={ProfileImage} alt='Profile' className='w-full h-full'/>
                </div>
        
              </div>
        
            </div>
            
        </>
    )
}

export default Navber
