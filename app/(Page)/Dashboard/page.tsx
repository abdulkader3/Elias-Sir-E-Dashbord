import React from 'react'
import SellsCard from '@/app/Components/DashCompo/SellsCard'

const page = () => {
  return (
    <>

      <div className="w-[1135px] h-screen flex justify-center items-center md:text-5xl text-sm font-bold ">
        <SellsCard />
        <SellsCard />
        <SellsCard />
        <SellsCard />

      </div>

    </>
  )
}

export default page
