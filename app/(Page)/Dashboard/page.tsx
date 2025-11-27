import React from 'react'
import SellsCard from '@/app/Components/DashCompo/SellsCard'
import ReCharts from '@/app/Components/DashCompo/ReCharts'
import ChartSeller from '@/app/Components/DashCompo/ChartSeller'
<<<<<<< HEAD

=======
import Purchase from '@/app/Components/DashCompo/Purchase'
import MarketView from '@/app/Components/DashCompo/MarketView'
import VisitSource from '@/app/Components/DashCompo/VisitSource'
import TotalRevenue from '@/app/Components/DashCompo/TotalRevenue'
>>>>>>> SHANTO


const page = () => {
  return (
    <>

<<<<<<< HEAD
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
=======
      <div className="w-full bg-[#E8EDF2] h-full">
        <div className='gap-6 flex justify-between items-center p-6 w-full '>
          <SellsCard />
          <SellsCard />
          <SellsCard />
          <SellsCard />
        </div>


        <div className='flex '>
          <ReCharts />
          <ChartSeller />
        </div>

        <Purchase />

        <div className="flex gap-6 p-6">
          <MarketView />
          <VisitSource />
          <TotalRevenue />
        </div>

>>>>>>> SHANTO

      </div>


<<<<<<< HEAD
     
=======

>>>>>>> SHANTO

    </>
  )
}

export default page