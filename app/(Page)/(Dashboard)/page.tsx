import React from 'react'
import SellsCard from '@/app/Components/DashCompo/SellsCard'
import ReCharts from '@/app/Components/DashCompo/ReCharts'
import ChartSeller from '@/app/Components/DashCompo/ChartSeller'
import Purchase from '@/app/Components/DashCompo/Purchase'
import MarketView from '@/app/Components/DashCompo/MarketView'
import VisitSource from '@/app/Components/DashCompo/VisitSource'
import TotalRevenue from '@/app/Components/DashCompo/TotalRevenue'


const page = () => {
  return (
    <>

      <div className="w-full min-h-screen">
        {/* Sales Cards Section */}
        <div className='gap-3 sm:gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3 sm:p-4 lg:p-6 w-full '>
          <SellsCard />
          <SellsCard />
          <SellsCard />
          <SellsCard />
        </div>


        {/* Charts Section */}
        <div className='flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-0'>
          <ReCharts />
          <ChartSeller />
        </div>

        {/* Purchase Section */}
        <Purchase />

        {/* Bottom Widgets Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6">
          <MarketView />
          <VisitSource />
          <TotalRevenue />
        </div>


      </div>




    </>
  )
}

export default page