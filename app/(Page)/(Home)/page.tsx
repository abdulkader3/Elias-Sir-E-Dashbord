import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

    <div className="w-full h-screen bg-purple-700 text-white flex flex-col gap-5 justify-center items-center md:text-5xl text-sm font-bold ">
      <h1>Home page</h1>

      <Link href={"/SellerDetails"}> Seller Details </Link>
    </div>
      
    </>
  )
}

export default page
