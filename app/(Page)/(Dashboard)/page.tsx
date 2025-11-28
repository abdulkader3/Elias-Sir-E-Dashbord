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

<<<<<<< HEAD:app/(Page)/(Dashboard)/page.tsx
      <div className="w-full bg-[#E8EDF2] min-h-screen">
        {/* Sales Cards Section */}
        <div className='gap-3 sm:gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3 sm:p-4 lg:p-6 w-full '>
=======
      <div className="w-full bg-[#E8EDF2] h-full">
        <div className='gap-6 flex justify-between items-center p-6 w-full '>
>>>>>>> a11e45549fa199c586d15e03772db2d9a3c65ad8:app/(Page)/Dashboard/page.tsx
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


<<<<<<< HEAD:app/(Page)/(Dashboard)/page.tsx

=======
>>>>>>> a11e45549fa199c586d15e03772db2d9a3c65ad8:app/(Page)/Dashboard/page.tsx

    </>
  )
}

export default page