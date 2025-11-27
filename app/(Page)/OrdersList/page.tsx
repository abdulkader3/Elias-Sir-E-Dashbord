import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

    <div className="w-full h-screen bg-amber-600 flex flex-col gap-25 justify-center items-center md:text-5xl text-sm font-bold ">
      <h1>Orders List page</h1>
      
      <Link href={"/OrderDetails"}> Order Details "-" </Link>
    </div>
      
    </>
  )
}

export default page
