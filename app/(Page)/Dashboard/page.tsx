import React from 'react'
import SellsCard from '@/app/Components/DashCompo/SellsCard'
import ReCharts from '@/app/Components/DashCompo/ReCharts'
import ChartSeller from '@/app/Components/DashCompo/ChartSeller'



const page = () => {
  return (
    <>

      <div className="w-full bg-[#E8EDF2] h-screen">
        <div className='gap-6 flex justify-between items-center p-6 w-full '>
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