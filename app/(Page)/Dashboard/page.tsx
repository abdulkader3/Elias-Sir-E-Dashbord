import React from 'react'
import SellsCard from '@/app/Components/DashCompo/SellsCard'
import ReCharts from '@/app/Components/DashCompo/ReCharts'
import ChartSeller from '@/app/Components/DashCompo/ChartSeller'



const page = () => {
  return (
    <>

      <div className="w-[80%] mx-auto bg-[#E8EDF2] h-screen  md:text-5xl text-sm font-bold ">
        <div className='gap-6 flex justify-center items-center py-6'>
          <SellsCard />
        <SellsCard />
        <SellsCard />
        <SellsCard />
        </div>


         <div className='flex '>
        <ReCharts/>
        <ChartSeller/>
      </div>

      </div>


     

    </>
  )
}

export default page